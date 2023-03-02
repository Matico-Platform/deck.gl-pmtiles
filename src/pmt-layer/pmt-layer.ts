import { type TileLayerProps, MVTLayer } from "@deck.gl/geo-layers/typed";
import { type DefaultProps } from "@deck.gl/core/typed";
import { GeoJsonLayer, type GeoJsonLayerProps } from "@deck.gl/layers/typed";

import { findTile, PMTiles, zxyToTileId } from "pmtiles";
import type { BinaryFeatures } from "@loaders.gl/schema";
import type { Feature } from "geojson";

import type {Loader} from '@loaders.gl/loader-utils';

import { PMTWorkerLoader } from "../pmt-loader";


// from @deck.gl/geo-layers/src/mvt-layer/mvt-layer


export type TileJson = {
  tilejson: string;
  tiles: string[];
  // eslint-disable-next-line camelcase
  vector_layers: any[];
  attribution?: string;
  scheme?: string;
  maxzoom?: number;
  minzoom?: number;
  version?: string;
};
/** Props added by the MVTLayer  */
export type _MVTLayerProps = {
  /** Called if `data` is a TileJSON URL when it is successfully fetched. */
  onDataLoad?: ((tilejson: TileJson | null) => void) | null;

  /** Needed for highlighting a feature split across two or more tiles. */
  uniqueIdProperty?: string;

  /** A feature with ID corresponding to the supplied value will be highlighted. */
  highlightedFeatureId?: string | null;

  /**
   * Use tile data in binary format.
   *
   * @default true
   */
  binary?: boolean;

  /**
   * Loaders used to transform tiles into `data` property passed to `renderSubLayers`.
   *
   * @default [MVTWorkerLoader] from `@loaders.gl/mvt`
   */
  loaders?: Loader[];
};

// From @deck.gl/geo-layers/typed/tile-layer/types
export type GeoBoundingBox = {west: number; north: number; east: number; south: number};
export type NonGeoBoundingBox = {left: number; top: number; right: number; bottom: number};

export type TileBoundingBox = NonGeoBoundingBox | GeoBoundingBox;

export type TileIndex = {x: number; y: number; z: number};

export type TileLoadProps = {
  index: TileIndex;
  id: string;
  bbox: TileBoundingBox;
  url?: string | null;
  signal?: AbortSignal;
  userData?: Record<string, any>;
  zoom?: number;
};


export type ParsedPmTile = Feature[] | BinaryFeatures;

export type ExtraProps = {
  raster?: boolean;
};

export type _PMTLayerProps = _MVTLayerProps & ExtraProps;

export type PmtLayerProps<DataT extends Feature = Feature> = _PMTLayerProps &
  GeoJsonLayerProps<DataT> &
  TileLayerProps<ParsedPmTile>;

const defaultProps: DefaultProps<PmtLayerProps> = {
  ...GeoJsonLayer.defaultProps,
  onDataLoad: { type: "function", value: null, optional: true, compare: false },
  uniqueIdProperty: "",
  highlightedFeatureId: null,
  binary: true,
  raster: false,
  loaders: [PMTWorkerLoader]
};

type ZxyOffset = { offset: number; length: number };
export class DeckglPmtiles extends PMTiles {
  async getZxyOffset(
    z: number,
    x: number,
    y: number,
    signal?: AbortSignal
  ): Promise<ZxyOffset | undefined> {
    const tile_id = zxyToTileId(z, x, y);
    const header = await this.cache.getHeader(this.source);
    // V2 COMPATIBILITY
    // if (header.specVersion < 3) {
    // 	return v2.getZxy(header, this.source, this.cache, z, x, y, signal);
    // }

    if (z < header.minZoom || z > header.maxZoom) {
      return undefined;
    }

    let d_o = header.rootDirectoryOffset;
    let d_l = header.rootDirectoryLength;
    for (let depth = 0; depth <= 3; depth++) {
      const directory = await this.cache.getDirectory(
        this.source,
        d_o,
        d_l,
        header
      );
      const entry = findTile(directory, tile_id);
      if (entry) {
        if (entry.runLength > 0) {
          return {
            offset: entry.offset,
            length: entry.length,
          };
        } else {
          d_o = header.leafDirectoryOffset + entry.offset;
          d_l = entry.length;
        }
      } else {
        return undefined;
      }
    }
    throw Error("Maximum directory depth exceeded");
  }
}

export class PMTLayer<
  DataT extends Feature = Feature,
  ExtraProps = {}
> extends MVTLayer<DataT, ExtraProps> {
  static layerName = "PMTilesLayer";
  static defaultProps = defaultProps;

  initializeState(): void {
    super.initializeState();
    // GlobeView doesn't work well with binary data
    const binary =
      this.context.viewport.resolution !== undefined
        ? false
        : this.props.binary;

    // @ts-ignore
    const raster = this.props.raster;

    (this as any)._updateTileData = async (): Promise<void> => {
      const data = this.props.data;
      // @ts-ignore
      const raster = this.props.raster;
      const pmtiles = new DeckglPmtiles(data as string);
      const header = await pmtiles.getHeader();
      this.setState({ data, pmtiles, raster, header });
    };

    this.setState({
      binary,
      raster,
      data: null,
    });
  }

  getTileData(loadProps: TileLoadProps, iter?: number): Promise<ParsedPmTile> {
    const { index, signal } = loadProps;
    const { data, binary, raster, pmtiles, header } = this.state;
    const { x, y, z } = index;
    let loadOptions = this.getLoadOptions();
    const { fetch } = this.props;

    return pmtiles
      .getZxyOffset(z, x, y, signal)
      .then((entry: Awaited<ZxyOffset | undefined>) => {
        if (!entry) {
          return new Promise((resolve) => resolve(null));
        }
        const tileOffset = entry.offset + header.tileDataOffset;
        const tileLength = entry.length;

        loadOptions = {
          ...loadOptions,
          mimeType: "application/x-protobuf",
          pmt: {
            workerUrl: "https://unpkg.com/@maticoapp/deck.gl-pmtiles@latest/dist/pmt-worker.js",
            coordinates: this.context.viewport.resolution ? "wgs84" : "local",
            tileIndex: index,
            raster: raster,
            tileCompression: header.tileCompression,
            ...loadOptions?.pmt,
          },
          gis: binary ? { format: "binary" } : {},
          fetch: {
            headers: {
              Range: `bytes=${tileOffset}-${tileOffset + tileLength - 1}`,
            },
          },
        };
        return fetch(data, {
          propName: "data",
          layer: this,
          loadOptions,
          signal,
        });
      });
  }
}
export default PMTLayer;

// code adapted from
// Deckgl MVT Layer (MIT) https://github.com/visgl/deck.gl/blob/master/modules/geo-layers/src/mvt-layer/mvt-layer.ts
// @jtmiclat/deck.gl-pmtiles (MIT) https://github.com/jtmiclat/deck.gl-pmtiles
