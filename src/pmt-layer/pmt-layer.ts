import { MVTLayer, MVTLayerProps } from "@deck.gl/geo-layers/typed";
import { DefaultProps } from "@deck.gl/core/typed";
import { GeoJsonLayer, GeoJsonLayerProps } from "@deck.gl/layers/typed";
import { Entry, PMTiles } from "pmtiles";

// Types
import type { BinaryFeatures } from "@loaders.gl/schema";
import type { Feature } from "geojson";
import { TileLoadProps } from "@deck.gl/geo-layers/typed/tile-layer/types";
import { PMTLoader, PMTWorkerLoader } from "../pmt-loader";

const defaultProps: DefaultProps<MVTLayerProps> = {
  ...GeoJsonLayer.defaultProps,
  onDataLoad: { type: "function", value: null, optional: true, compare: false },
  uniqueIdProperty: "",
  highlightedFeatureId: null,
  binary: true,
  loaders: [PMTWorkerLoader],
};

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
}

/** Props added by the PmTilesLayer  */
export type PmTilesLayerProps = Partial<GeoJsonLayerProps> & MVTLayerProps;

export class PMTLayer extends MVTLayer<
  any,
  PmTilesLayerProps & ExtraProps
> {
  static layerName = "PMTilesLayer";
  static defaultProps = defaultProps;

  initializeState(): void {
    super.initializeState();
    // GlobeView doesn't work well with binary data
    const binary =
      this.context.viewport.resolution !== undefined
        ? false
        : this.props.binary;
    const raster = this.props.raster;
    (this as any)._updateTileData = async (): Promise<void> => {
      let data = this.props.data;
      let raster = this.props.raster;
      let tileJSON = null;
      let pmtiles = new PMTiles(data as string);
      this.setState({ data, tileJSON, pmtiles, raster });
    };
    this.setState({
      binary,
      raster,
      data: null,
      tileJSON: null,
      
    });
  }
  async getZxy(z: number, x: number, y: number): Promise<Entry> {
    const { pmtiles } = this.state;
    return pmtiles.getZxy(z, x, y);
  }

  getTileData(loadProps: TileLoadProps): Promise<ParsedPmTile> {
    const { data, binary, raster, pmtiles } = this.state;
    const { index, signal } = loadProps;
    const { x, y, z } = index;
    let loadOptions = this.getLoadOptions();
    const { fetch } = this.props;
    return pmtiles.getZxy(z, x, y).then((entry: Entry) => {
      loadOptions = {
        ...loadOptions,
        mimeType: "application/x-protobuf",
        pmt: {
          workerUrl: "https://unpkg.com/@maticoapp/deck.gl-pmtiles@latest/dist/pmt-worker.js",
          coordinates: this.context.viewport.resolution ? "wgs84" : "local",
          tileIndex: index,
          raster: raster,
          ...loadOptions?.pmt,
        },
        gis: binary ? { format: "binary" } : {},
        fetch: {
          headers: {
            Range:
              "bytes=" + entry.offset + "-" + (entry.offset + entry.length - 1),
          },
        },
      };
      return fetch(data, {
        propName: "data",
        layer: this,
        loadOptions,
        signal,
        // @ts-ignore
      })
    });
  }
}
export default PMTLayer;

// code adapted from
// Deckgl MVT Layer (MIT) https://github.com/visgl/deck.gl/blob/master/modules/geo-layers/src/mvt-layer/mvt-layer.ts
// @jtmiclat/deck.gl-pmtiles (MIT) https://github.com/jtmiclat/deck.gl-pmtiles