import { MVTLoader } from "@loaders.gl/mvt";
import { Entry, PMTiles } from "pmtiles";
import { decompressSync } from "fflate";
import { ParsedPmTile } from './pmt-layer';

interface GetPmTilePromiseProps {
  x: number;
  y: number;
  z: number;
  signal: AbortSignal | undefined;
  url: string;
}

export async function getPmTiles({
  x,
  y,
  z,
  url,
  signal,
}: GetPmTilePromiseProps): Promise<ParsedPmTile | null> {
  const tiles = new PMTiles(url);
  return new Promise<Entry | null>((resolve, reject) => {
    abortListener(signal, reject);
    resolve(tiles.getZxy(z, x, y));
  })
    .then((val) => {
      if (!val) return null;
      return new Promise<DataView | null>((resolve, reject) => {
        abortListener(signal, reject);
        resolve(tiles.source.getBytes(val.offset, val.length));
      });
    })
    .then((dataArray) => {
      if (!dataArray) return null;
      let data = new Uint8Array(dataArray.buffer);
      if (data[0] === 0x1f && data[1] === 0x8b) {
        data = decompressSync(data);
      }
      const view = new DataView(data.buffer);

      return new Promise((resolve, reject) => {
        abortListener(signal, reject);
        resolve(
          MVTLoader.parse(
            new Uint8Array(view.buffer, view.byteOffset, view.byteLength),
            {
              mvt: {
                shape: "binary",
                coordinates: "wgs84",
                layerProperty: "layerName",
                layers: undefined,
                tileIndex: { x, y, z },
              },
            }
          )
        );
      });
    });
}

function abortListener(
  signal: AbortSignal | undefined,
  reject: (e: DOMException) => void
) {
  if (signal) {
    if (signal.aborted) {
      reject(new DOMException("aborted!", "AbortError"));
    }
    signal.addEventListener("abort", () => {
      reject(new DOMException("aborted!", "AbortError"));
    });
  }
}
