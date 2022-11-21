import { MVTLayer, MVTLayerProps } from "@deck.gl/geo-layers/typed";
import { DefaultProps } from "@deck.gl/core/typed";
import { GeoJsonLayer, GeoJsonLayerProps } from "@deck.gl/layers/typed";
import { Entry, PMTiles } from "pmtiles";
import ParseMVT from "@loaders.gl/mvt/dist/lib/parse-mvt";

import { decompressSync } from "fflate";
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
  loaders: [PMTLoader], // PMTWorkerLoader
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
      const header = await pmtiles.getHeader();
      console.log('header', header)
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
    const { pmtiles } = this.state;
    const { index, signal } = loadProps;
    const { x, y, z } = index;
    return pmtiles.getZxy(z, x, y, signal).then((entry) => {
      // console.log('entry', entry.data)
      const parsedData = ParseMVT(entry.data, {
        mvt: {
          shape: 'geojson',
          coordinates: 'wgs84',
          tileIndex: { x, y, z }
        }
      })
      console.log('parsedData', parsedData)
      return parsedData.data
    })
  }
}
export default PMTLayer;

// code adapted from
// Deckgl MVT Layer (MIT) https://github.com/visgl/deck.gl/blob/master/modules/geo-layers/src/mvt-layer/mvt-layer.ts
// @jtmiclat/deck.gl-pmtiles (MIT) https://github.com/jtmiclat/deck.gl-pmtiles