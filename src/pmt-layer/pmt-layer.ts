import { MVTLayer, MVTLayerProps } from "@deck.gl/geo-layers/typed";
import { DefaultProps } from "@deck.gl/core/typed";
import { GeoJsonLayer } from "@deck.gl/layers/typed";
import { Entry, PMTiles } from "pmtiles";

// Types
import type { BinaryFeatures } from "@loaders.gl/schema";
import type { Feature } from "geojson";
import { TileLoadProps } from "@deck.gl/geo-layers/typed/tile-layer/types";
import { PMTLoader } from "../pmt-loader";

const defaultProps: DefaultProps<MVTLayerProps> = {
  ...GeoJsonLayer.defaultProps,
  onDataLoad: { type: "function", value: null, optional: true, compare: false },
  uniqueIdProperty: "",
  highlightedFeatureId: null,
  binary: true,
  loaders: [PMTLoader]
};

export type ParsedPmTile = Feature[] | BinaryFeatures;

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


/** Props added by the PmTilesLayer  */
export type PmTilesLayerProps = Omit<MVTLayerProps, "loaders">

export class PMTilesLayer extends MVTLayer {
  static layerName = "PMTilesLayer";
  static defaultProps = defaultProps;

  initializeState(): void {
    super.initializeState();
    // GlobeView doesn't work well with binary data
    const binary =
      this.context.viewport.resolution !== undefined
        ? false
        : this.props.binary;
    (this as any)._updateTileData = async (): Promise<void> => {
      let data = this.props.data;
      let tileJSON = null;
      let pmtiles = new PMTiles(data as string);
      this.setState({ data, tileJSON, pmtiles });
    };
    this.setState({
      binary,
      data: null,
      tileJSON: null,
    });
  }

  getTileData(loadProps: TileLoadProps): Promise<ParsedPmTile> {
    const { data, binary, pmtiles } = this.state;
    const { index, signal } = loadProps;
    const { x, y, z } = index;
    let loadOptions = this.getLoadOptions();
    const { fetch } = this.props;
    const zxyPromise = pmtiles.getZxy(z, x, y);
    return zxyPromise.then((val: Entry) => {
      if (!val) {
        return null;
      }
      loadOptions = {
        ...loadOptions,
        mimeType: "application/x-protobuf",
        pmt: {
          ...loadOptions?.mvt,
          coordinates: this.context.viewport.resolution ? "wgs84" : "local",
          tileIndex: index,
          // Local worker debug
          // workerUrl: `modules/mvt/dist/mvt-loader.worker.js`
          // Set worker to null to skip web workers
          // workerUrl: null
        },
        gis: binary ? { format: "binary" } : {},
        fetch: {
          headers: {
            Range: "bytes=" + val.offset + "-" + (val.offset + val.length - 1),
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
export default PMTilesLayer;

// code adapted from
// Deckgl MVT Layer (MIT) https://github.com/visgl/deck.gl/blob/master/modules/geo-layers/src/mvt-layer/mvt-layer.ts
// @jtmiclat/deck.gl-pmtiles (MIT) https://github.com/jtmiclat/deck.gl-pmtiles