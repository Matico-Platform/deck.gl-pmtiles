import type { Loader, LoaderWithParser } from "@loaders.gl/loader-utils";
import { decompressSync } from "fflate";
import ParseMVT from "@loaders.gl/mvt/dist/lib/parse-mvt";
import { MVTLoaderOptions } from "@loaders.gl/mvt/dist/lib/types";

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "latest";

type PMTLoaderOptions = MVTLoaderOptions & {};

const DEFAULT_PMT_LOADER_OPTIONS: PMTLoaderOptions = {
  pmt: {},
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
  if (options) {
    options.mvt = {
      ...options.mvt,
      ...(options?.pmt || {}),
    };
  }
  let data = new Uint8Array(arrayBuffer);
  if (data[0] === 0x1f && data[1] === 0x8b) {
    data = decompressSync(data);
  }
  return ParseMVT(data, options);
}
