
import { LoaderWithParser } from "@loaders.gl/loader-utils";
import type { BinaryFeatures } from "@loaders.gl/schema";

export type DataShapeNames = keyof DataShapes;
export type DataShapes = {
  "binary": BinaryFeatures,
  "binary-geometry": BinaryFeatures
  "columnar-table": {'shape': "columnar-table", 'data': BinaryFeatures},
  "geojson": GeoJSON.FeatureCollection,
  "geojson-row-table": {'shape': "geojson-row-table", 'data': GeoJSON.FeatureCollection},

}
export type BinaryEntries = [keyof BinaryFeatures, any];
export type JoinLoaderProps = {
    loader: LoaderWithParser;
    shape: "binary";
    leftId: string;
    rightId: string;
    tableData?: {[key: string]: any}[];
    dataDict?: {[key: string]: object};
    dataMap?: Map<string, object>;
    updateTriggers?: any[];
  }
export  type JoinLoader = (props: JoinLoaderProps) => LoaderWithParser;
  