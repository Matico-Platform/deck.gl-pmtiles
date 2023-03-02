import type { Loader, LoaderWithParser, LoaderOptions } from "@loaders.gl/loader-utils";
//@ts-ignore
import { decompressSync } from "fflate";
import ParseMVT from "@loaders.gl/mvt/dist/lib/parse-mvt";
import { MVTLoaderOptions } from "@loaders.gl/mvt/dist/lib/types";
import parseImage from '@loaders.gl/images/dist/lib/parsers/parse-image'
import { ImageLoaderOptions } from "@loaders.gl/images/dist/image-loader";
// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== "undefined" ? __VERSION__ : "latest";

type JoinLoaderOptions = LoaderOptions & {
  join?: {
    
  }
}

const DEFAULT_PMT_LOADER_OPTIONS: JoinLoaderOptions = {
  join: {
  }
};

/**
 * Worker loader for the Dataset join Loader
 */
export const JoinWorkerLoader: Loader = {
  id: "join",
  module: "join",
  name: "Join",
  version: VERSION,
  extensions: ["*"],
  mimeTypes: ["application/x-www-form-urlencoded"],
  worker: true,
  category: "utility",
  options: DEFAULT_PMT_LOADER_OPTIONS,
};

/**
 * Loader for the Mapbox Vector Tile format
 */
export const JoinLoader: LoaderWithParser = {
  ...JoinWorkerLoader,
  parse: async (data, options?: JoinLoaderOptions) =>
    parseJoin(data, options),
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
async function parseJoin(data: ArrayBuffer, options?: JoinLoaderOptions) {
  console.log(data, options)
  return data
}