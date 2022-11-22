import {
  type TileLayerProps,
  type MVTLayerProps,
  MVTLayer,
} from "@deck.gl/geo-layers/typed";
import { type DefaultProps } from "@deck.gl/core/typed";
import { GeoJsonLayer, type GeoJsonLayerProps } from "@deck.gl/layers/typed";
import { type _MVTLayerProps } from "@deck.gl/geo-layers/src/mvt-layer/mvt-layer";
import { findTile, PMTiles, zxyToTileId } from "pmtiles";
import type { BinaryFeatures } from "@loaders.gl/schema";
import type { Feature } from "geojson";
import { type TileLoadProps } from "@deck.gl/geo-layers/typed/tile-layer/types";
import { PMTLoader, PMTWorkerLoader } from "../pmt-loader";

export type ParsedPmTile = Feature[] | BinaryFeatures;

export type TileJson = {
  tilejson: string;
  tiles: string[];
  vector_layers: any[];
  attribution?: string;
  scheme?: string;
  maxzoom?: number;
  minzoom?: number;
  version?: string;
};

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
      let data = this.props.data;
      // @ts-ignore
      let raster = this.props.raster;
      let tileJSON = null;
      let pmtiles = new DeckglPmtiles(data as string);
      const header = await pmtiles.getHeader();
      this.setState({ data, tileJSON, pmtiles, raster, header });
    };

    this.setState({
      binary,
      raster,
      data: null,
      tileJSON: null,
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
            workerUrl: "http://127.0.0.1:5173/dist/pmt-worker.js",
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
