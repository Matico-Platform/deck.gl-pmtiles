import { useMemo } from "react";
import { LoaderWithParser } from "@loaders.gl/loader-utils";
import type { BinaryFeatures } from "@loaders.gl/schema";

type DataShapeNames = keyof DataShapes;
type DataShapes = {
  "binary": BinaryFeatures,
  "binary-geometry": BinaryFeatures
  "columnar-table": {'shape': "columnar-table", 'data': BinaryFeatures},
  "geojson": GeoJSON.FeatureCollection,
  "geojson-row-table": {'shape': "geojson-row-table", 'data': GeoJSON.FeatureCollection},
}

type BinaryEntries = [keyof BinaryFeatures, any];

function join<T extends DataShapeNames>({
  mapData,
  shape,
  leftId,
  dataAccessor
}:{
  mapData: DataShapes[T];
  shape: T extends DataShapeNames ? T : never;
  leftId: string;
  dataAccessor: (key: string) => object;
}): DataShapes[T] {
  switch (shape) {
    case "columnar-table":
    case "binary-geometry":
    case "binary": {
      const isColumnar = shape === "columnar-table";
      // @ts-ignore
      let dataInner = isColumnar ? mapData.data : mapData
      Object.entries(dataInner).forEach(([featureType, {properties}]: BinaryEntries) => {
        properties &&
          properties.forEach((entry: { [key: string]: any }, i: number) => {
            const id = entry[leftId];
            const data = dataAccessor(id);
            if (data) {
              dataInner[featureType].properties[i] = {
                ...entry,
                ...data,
              };
            }
          });
      });
      break;
    }
    case 'geojson-row-table':
    case "geojson": {
      const isRowTable = shape === "geojson-row-table";
      // @ts-ignore
      let dataInner = isRowTable ? mapData.data : mapData
      dataInner.features.forEach((entry: { [key: string]: any }) => {
        const id = entry.properties[leftId];
        const data = dataAccessor(id);
        if (data) {
          entry.properties = {
            ...entry.properties,
            ...data,
          };
        }
      });
      break;
    }
    default:
      break;
  }
  return mapData as DataShapes[T]
};

export const useJoinLoader = ({
  loader,
  shape,
  leftId,
  rightId,
  tableData,
  dataDict,
  dataMap,
  updateTriggers,
}: {
  loader: LoaderWithParser;
  shape: "binary";
  leftId: string;
  rightId: string;
  tableData?: {[key: string]: any}[];
  dataDict?: {[key: string]: object};
  dataMap?: Map<string, object>;
  updateTriggers?: any[];
}): LoaderWithParser => {

  const dataAccessor = useMemo(() => {
    if (!dataDict && !dataMap) {
      const tempMap = new Map();
      tableData &&
        tableData.forEach((entry) => tempMap.set(entry[rightId], entry));
      return (key: string) => tempMap.get(key)
    } else if (dataMap) {
      return (key: string) => dataMap.get(key)
    } else if (dataDict) {
      return (key: string) => dataDict[key]
    } else {
      return (_key: string) => {}
    }
  }, [rightId, updateTriggers || tableData]);

  const injectedParse: typeof loader.parse = async (arrayBuffer, options) => {
    const mapData = await loader.parse(arrayBuffer, options);
    return join({
      shape,
      mapData,
      leftId,
      dataAccessor,
    });
  }

  const injectedLoader = {
    ...loader,
    parse: injectedParse
  }

  return injectedLoader;
};
