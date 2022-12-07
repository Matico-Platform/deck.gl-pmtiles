import type { Loader, LoaderWithParser } from "@loaders.gl/loader-utils";
//@ts-ignore
import { decompressSync } from "fflate";
import ParseMVT from "@loaders.gl/mvt/dist/lib/parse-mvt";
import { MVTLoaderOptions } from "@loaders.gl/mvt/dist/lib/types";
import parseImage from '@loaders.gl/images/dist/lib/parsers/parse-image'
import { ImageLoaderOptions } from "@loaders.gl/images/dist/image-loader";
import { Compression } from "pmtiles";
// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "latest";

type PMTLoaderOptions = {
  pmt: {
    raster: boolean;
    tileCompression?: Compression;
  }
};

const DEFAULT_PMT_LOADER_OPTIONS: PMTLoaderOptions & MVTLoaderOptions & ImageLoaderOptions = {
  pmt: {
    raster: false
  },
  // @ts-ignore
  mvt: {
  },
  image: {}
};
/**
 * Worker loader for the Mapbox Vector Tile format
 */
export const PMTWorkerLoader: Loader = {
  id: "pmt",
  module: "pmt",
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
  parse: async (arrayBuffer, options?: PMTLoaderOptions) => {
    return parsePMT(arrayBuffer, options)
  },
  parseSync: (arrayBuffer, options?: PMTLoaderOptions) => {
    return parsePMT(arrayBuffer, options)
  },
  binary: true,
};

/**
 * Parse PMT arrayBuffer and return GeoJSON.
 *
 * @param arrayBuffer A MVT arrayBuffer
 * @param options
 * @returns A GeoJSON geometry object or a binary representation
 */
function parsePMT(arrayBuffer: ArrayBuffer, options?: PMTLoaderOptions) {
  if (options.pmt.raster){
    const blob = new Blob([arrayBuffer], {type: "image/png"});
    const url = URL.createObjectURL(blob);
    // const url = window.URL.createObjectURL(blob);
    return createImageBitmap(blob);
  } else {
    const decompressed = fflateDecompress(arrayBuffer, options.pmt.tileCompression)
    const tiledata = ParseMVT(decompressed, options);
    return tiledata;
  }
}

function fflateDecompress(
  buf: ArrayBuffer,
  compression: Compression
): ArrayBuffer {
  if (compression === Compression.None || compression === Compression.Unknown) {
    return buf;
  } else if (compression === Compression.Gzip) {
    return decompressSync(new Uint8Array(buf));
  } else {
    throw Error("Compression method not supported");
  }
}