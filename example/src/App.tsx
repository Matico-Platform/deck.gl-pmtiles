import { useState } from 'react'
import {PmTilesLayer}  from '../../src';
import './App.css'
import DeckGL from '@deck.gl/react/typed';
import { BitmapLayer, GeoJsonLayer } from '@deck.gl/layers/typed';
import { TileLayer } from '@deck.gl/geo-layers/typed';
import {
  RangeSlider,
  TextField,
  Heading,
  Divider
} from '@adobe/react-spectrum';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 5,
  pitch: 0,
  bearing: 0
}

export default function App() {
  const [dataSource, setDataSource] = useState<string>("https://matico.s3.us-east-2.amazonaws.com/census/block_groups.pmtiles")
  const [zoomRange, setZoomRange] = useState<{start:number, end:number}>({start: 4, end: 22})
  const layers = [
    new TileLayer({
      data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,
      renderSubLayers: props => {
        const {
          // @ts-ignore
          bbox: { west, south, east, north }
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north]
        });
      }
    }),

    new PmTilesLayer({
      id: 'pmtiles-layer',
      data:dataSource,
      onClick: (info) => {
        console.log(info)
      },
      maxZoom: zoomRange.end,
      minZoom: zoomRange.start,
      // @ts-ignore
      getFillColor: [255,0,0],
      getLineColor: [0,0,0],
      stroked: true,
      lineWidthMinPixels: 1,
      pickable: true,
      // @ts-ignore
      // renderSubLayers: ({data, id, extensions, clipBounds}) => {
      //   console.log(data)
      //   return new GeoJsonLayer({
      //     id: 'geojson-layer' + id,
      //     data,
      //     getFillColor: () => [255*Math.random(),255*Math.random(),255*Math.random()],
      //     getLineColor: [0,0,0],
      //     stroked: true,
      //     lineWidthMinPixels: 1,
      //     pickable: true,
      //     clipBounds,
      //     extensions
      //   })
      // }
    }),
  ]

  return <div style={{ width: '100%', height: '100%' }}>
    <DeckGL
    // @ts-ignore
      initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers} />
    <div style={{
      padding:'0 .5em',
      position:'absolute',
      top:0,
      left:0,
      zIndex:1000,
      background:'black',
      maxWidth:"100vw",
      maxHeight:"50vh",
      overflowY: "auto",
    }}>
      <Heading level={4}>PMTiles Layer</Heading>
      <TextField
        label="PMTiles Source"
        value={dataSource}
        onChange={setDataSource} />
        <Divider marginY="size-150" />

      <RangeSlider
        label="Zoom Range"
        minValue={0}
        maxValue={22}
        value={zoomRange}
        onChange={setZoomRange} />

    </div>
  </div>
}