import { useMemo } from "react";
import { LoaderWithParser } from "@loaders.gl/loader-utils";
import type { BinaryFeatures } from "@loaders.gl/schema";

type DataShapes = {
  binary: BinaryFeatures;
};

type JoinProps = {
  mapData: any[];
  shape: "binary";
  dataDict: Map<string, object>;
  leftId: string;
};

const join = <T extends JoinProps>(props: T): DataShapes[T["shape"]] => {
  const { shape, dataDict, leftId } = props;
  const mapData = props.mapData as DataShapes[T["shape"]];
  switch (shape) {
    case "binary":
      Object.entries(mapData).forEach(([featureType, { properties }]) => {
        properties &&
          properties.forEach((entry: { [key: string]: any }, i: number) => {
            const id = entry[leftId];
            const data = dataDict.get(id);
            if (data) {
              // @ts-ignore
              mapData[featureType].properties[i] = {
                ...entry,
                ...data,
              };
            }
          });
      });
      break;
    default:
      break;
  }
  return mapData as DataShapes[T["shape"]];
};

export const useJoinLoader = ({
  loader,
  shape,
  leftId,
  rightId,
  tableData,
  updateTriggers,
}: {
  loader: LoaderWithParser;
  shape: "binary";
  leftId: string;
  rightId: string;
  tableData: any[];
  updateTriggers?: any[];
}): LoaderWithParser => {
  const dataDict = useMemo(() => {
    const tempDict = new Map();
    tableData &&
      tableData.forEach((entry) => tempDict.set(entry[rightId], entry));
    return tempDict;
  }, [rightId, updateTriggers || tableData]);
  const injectedLoader = {
    ...loader,
    parse: async (arrayBuffer: ArrayBuffer, options) => {
      const mapData = await loader.parse(arrayBuffer, options);
      return join({
        shape,
        mapData,
        leftId,
        dataDict,
      });
    },
  } as LoaderWithParser;
  return injectedLoader;
};
