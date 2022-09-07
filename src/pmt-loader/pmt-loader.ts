import type { Loader, LoaderWithParser } from "@loaders.gl/loader-utils";
//@ts-ignore
import { decompressSync } from "fflate";
import ParseMVT from "@loaders.gl/mvt/dist/lib/parse-mvt";
import { MVTLoaderOptions } from "@loaders.gl/mvt/dist/lib/types";
import parseImage from '@loaders.gl/images/dist/lib/parsers/parse-image'
import { ImageLoaderOptions } from "@loaders.gl/images/dist/image-loader";
// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "latest";

interface PMTLoaderOptions  {
  pmt: {
    raster: boolean;
  }
};

const DEFAULT_PMT_LOADER_OPTIONS: PMTLoaderOptions & MVTLoaderOptions & ImageLoaderOptions = {
  pmt: {
    raster: false
  },
  // @ts-ignore
  mvt: {},
  image: {}
};
/**
 * Worker loader for the Mapbox Vector Tile format
 */
export const PMTWorkerLoader: Loader = {
  id: "pmtiles",
  module: "pmtiles",
  name: "PMTiles",
  version: VERSION,
  extensions: ["pmtiles"],
  mimeTypes: ["application/x-protobuf"],
  worker: true,
  category: "geometry",
  options: DEFAULT_PMT_LOADER_OPTIONS,
};

/**
 * Loader for the Mapbox Vector Tile format
 */
export const PMTLoader: LoaderWithParser = {
  ...PMTWorkerLoader,
  parse: async (arrayBuffer, options?: PMTLoaderOptions) =>
    parsePMT(arrayBuffer, options),
  binary: true,
  worker: false,
};

/**
 * Parse PMT arrayBuffer and return GeoJSON.
 *
 * @param arrayBuffer A MVT arrayBuffer
 * @param options
 * @returns A GeoJSON geometry object or a binary representation
 */
async function parsePMT(arrayBuffer: ArrayBuffer, options?: PMTLoaderOptions) {
  console.log(arrayBuffer)
  if (options.pmt.raster){
    const blob = new Blob([arrayBuffer], {type: "image/png"});
    console.log(blob)
    const url = URL.createObjectURL(blob);
    // const url = window.URL.createObjectURL(blob);
    console.log(url)
    return createImageBitmap(blob);
  } else {
    let data = new Uint8Array(arrayBuffer);
    if (data[0] === 0x1f && data[1] === 0x8b) {
      data = decompressSync(data);
    }
    return ParseMVT(data, options);
  }
}