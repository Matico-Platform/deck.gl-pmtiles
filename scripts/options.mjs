import fs from "fs";
export const pkg = JSON.parse(fs.readFileSync("./package.json"));
export const entrypoint = "src/index.ts";
export const outDir = "dist";

export const banner = `/**
 * Deckgl PM tiles v${pkg.version}
 * Copyright (c) ${new Date().getFullYear()} Matico.
 * Author: Dylan Halpern, Matico
 * @license MIT
 */`;

export const options = {
  entryPoints: [entrypoint],
  format: "esm",
  bundle: true,
  sourcemap: true,
  loader: {
    '.eot': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.svg': 'file',
    '.ttf': 'file',
  },
  plugins: [
  ],
  logLevel: "info",
  logLimit: 0,
  banner: { js: banner },
  define: {
    VERSION: `"${pkg.version}"`,
  },
};
