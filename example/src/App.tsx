import React, { useState, useMemo } from "react";
import { JoinLoader, PMTLayer, PMTLoader } from "../../src";
import "./App.css";
import DeckGL from "@deck.gl/react/typed";
import { BitmapLayer, GeoJsonLayer } from "@deck.gl/layers/typed";
import { TileLayer } from "@deck.gl/geo-layers/typed";
import {
  RangeSlider,
  TextField,
  Heading,
  Divider,
  View,
  Grid,
  Flex,
  Text,
  ProgressCircle
} from "@adobe/react-spectrum";
import { useJoinLoader } from "./useJoinLoader";
// @ts-ignore
import { ColorArea, ColorWheel } from "@react-spectrum/color";
import { parseColor } from "@react-stately/color";
import { useQuery } from "@tanstack/react-query";
import { CSVLoader } from "@loaders.gl/csv";
import { load } from "@loaders.gl/core";

const INITIAL_VIEW_STATE = {
  longitude: -90,
  latitude: 42,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};
const incomeBreaks = [
  {value: 19624, color:"#440154"},
  {value: 26061, color:"#414487"},
  {value: 32860, color:"#2a788e"},
  {value: 43794, color:"#22a884"},
  {value: 652420, color:'#fde725'}
]

const getColorFunc = (breaks: {value:number, color:string}[], format = "rgbArray") => {
  const normalizedBreaks = breaks.map(({value, color}) => {
    const normalizedColor = parseColor(color).toFormat('rgb')
    return {
    value: value,
    // @ts-ignore
    color: [normalizedColor.red, normalizedColor.green, normalizedColor.blue]
  }})

  return (value: number) => {
    // @ts-ignore
    if ([undefined,null].includes(value)) return [20,20,20]
    for (let i = 0; i < normalizedBreaks.length; i++) {
      if (value < normalizedBreaks[i].value) {
        return normalizedBreaks[i].color      
      }
    }
    return normalizedBreaks.at(-1)?.color
  }
}

const incomeScale = getColorFunc(incomeBreaks)

export default function App() {
  const [dataSource, setDataSource] = useState<string>(
    "https://matico.s3.us-east-2.amazonaws.com/census/block_groups.pmtiles"
  );
  const [zoomRange, setZoomRange] = useState<{ start: number; end: number }>({
    start: 0,
    end: 10,
  });
  const {
    isLoading,
    error,
    data: tableData,
  } = useQuery(["tableData"], () => load("/percapita_income.csv", CSVLoader, {csv: {header:true, dynamicTyping: true}}));

  let [fill, setFill] = useState(parseColor("hsl(162, 74%, 71%)"));
  let [, fillHue, fillLightness] = fill.getColorChannels();
  let [border, setBorder] = useState(parseColor("hsl(0, 0%, 19%)"));
  let [, borderHue, borderLightness] = border.getColorChannels();

  const joinCbgLoader = useJoinLoader({
    loader: PMTLoader,
    shape: "binary",
    leftId: "GEOID",
    rightId: "GEOID",
    tableData,
    updateTriggers: [isLoading]
  })

  if (isLoading) {
    return (
      <div style={{position:"absolute", 
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
      }}>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="size-100">
          <ProgressCircle aria-label="Loading…" isIndeterminate />
          <Heading>Loading...</Heading>
        </Flex>
      </div>
    )
  }

  const layers = [
    // new TileLayer({
    //   data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
    //   minZoom: 0,
    //   maxZoom: 19,
    //   tileSize: 256,
    //   renderSubLayers: (props) => {
    //     console.log(props)
    //     const {
    //       // @ts-ignore
    //       bbox: { west, south, east, north },
    //     } = props.tile;

    //     return new BitmapLayer(props, {
    //       data: null,
    //       image: props.data,
    //       bounds: [west, south, east, north],
    //     });
    //   },
    // }),

    new PMTLayer({
      id: "pmtiles-layer",
      data: dataSource,
      // raster: true,
      onClick: (info) => {
        console.log(info);
      },
      maxZoom: zoomRange.end,
      minZoom: zoomRange.start,
      // @ts-ignore
      getFillColor: d => incomeScale(d.properties?.["PerCapitaIncome"]),
      stroked: false,
      lineWidthMinPixels: 1,
      pickable: true,
      tileSize: 256,
      loaders: [joinCbgLoader],
      // renderSubLayers: (props) => {
      //   console.log(props)
      //   const {
      //     // @ts-ignore
      //     bbox: { west, south, east, north },
      //   } = props.tile;

      //   return new BitmapLayer(props, {
      //     data: null,
      //     image: props.data,
      //     bounds: [west, south, east, north],
      //     extensions: []
      //   });
      // },
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
        {/* <Flex direction="column" gap="size-150">
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

          <View position="relative" width="size-2400">
            <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%"
            >
              <Text>Fill Color</Text>
              <ColorArea
                xChannel={fillHue}
                yChannel={fillLightness}
                value={fill}
                onChange={setFill}
                size="size-1200"
              />
            </Grid>
            <ColorWheel value={fill} onChange={setFill} size="size-2400" />
          </View>

          <View position="relative" width="size-2400">
            <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%"
            >
              <Text>Border Color</Text>
              <ColorArea
                xChannel={borderHue}
                yChannel={borderLightness}
                value={border}
                onChange={setBorder}
                size="size-1200"
              />
            </Grid>
            <ColorWheel value={border} onChange={setBorder} size="size-2400" />
          </View>
        </Flex> */}
      </div>
    </div>
  );
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h: number, s: number, l: number) {
  let r, g, b;
  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

const hue2rgb = (p: number, q: number, t: number) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};
