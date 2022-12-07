import { useState } from "react";
import { PMTLayer } from "../../src";
import "./App.css";
import DeckGL from "@deck.gl/react/typed";
import { BitmapLayer, GeoJsonLayer } from "@deck.gl/layers/typed";
import { TileLayer } from "@deck.gl/geo-layers/typed";
import {
  RangeSlider,
  TextField,
  Heading,
  Flex,
  ProgressCircle,
} from "@adobe/react-spectrum";
import { parseColor } from "@react-stately/color";
import { useQuery } from "@tanstack/react-query";
import { CSVLoader } from "@loaders.gl/csv";
import { load } from "@loaders.gl/core";

const INITIAL_VIEW_STATE = {
  longitude: -90,
  latitude: 42,
  zoom: 7,
  pitch: 0,
  bearing: 0,
};

export default function App() {
  const [dataSource, setDataSource] = useState<string>(
    "/output.pmtiles"
  );
  const [zoomRange, setZoomRange] = useState<{ start: number; end: number }>({
    start: 5,
    end: 10,
  });
  const {
    isLoading,
    error,
    data: tableData,
  } = useQuery(["tableData"], () =>
    load("/percapita_income.csv", CSVLoader, {
      csv: { header: true, dynamicTyping: false },
    })
  );

  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="size-100"
        >
          <ProgressCircle aria-label="Loading…" isIndeterminate />
          <Heading>Loading...</Heading>
        </Flex>
      </div>
    );
  }

  const layers = [
    new TileLayer({
      data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,
      renderSubLayers: (props) => {
        // console.log(props)
        const {
          // @ts-ignore
          bbox: { west, south, east, north },
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north],
        });
      },
    }),
    new PMTLayer({
      id: "pmtiles-layer",
      data: dataSource,
      onClick: (info) => {
        console.log(info);
      },
      maxZoom: zoomRange.end,
      minZoom: zoomRange.start,
      getFillColor: (d: any) => [255 * (+d.properties.STATEFP / 90), 0, 0],
      pickable: true,
    }),
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DeckGL
        // @ts-ignore
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      />
      <div
        style={{
          padding: "0 1em 1em 1em",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          background: "black",
          maxWidth: "100vw",
          maxHeight: "100%",
          overflowY: "auto",
        }}
      >
        <Flex direction="column" gap="size-150">
          <Heading level={4}>PMTiles Layer</Heading>
          <TextField
            label="PMTiles Source"
            value={dataSource}
            onChange={setDataSource}
          />
          <RangeSlider
            label="Zoom Range"
            minValue={0}
            maxValue={22}
            value={zoomRange}
            onChange={setZoomRange}
          />
        </Flex>
      </div>
    </div>
  );
}
