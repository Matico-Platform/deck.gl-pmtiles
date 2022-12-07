# @maticoapp/deck.gl-pmtiles

This repo provides a typed Deck.gl layer and loader for PMTiles data. PMTiles data provides a serverless and compact way to store tile geospatial data. Combined with Deck.gl's rendering, this provides a flexible and powerful way to cheaply manage geospatial data.

Learn more about Brandon Liu's [PMTiles and ProtoMaps work](https://github.com/protomaps/PMTiles).

## Breaking Changes
Version 0.0.3 breaks support for V2 tiles. Legacy support will be coming back soon. If you need to use legacy v2 spec PMtiles, use version 0.0.14 of this package.
## Roadmap
- Raster tile support
- V2 legacy support
## Repo Scripts:

```js
yarn build-dev 
// builds the loader/layer for development and listens for changes
    
    
yarn build-prod 
// builds the loader/layer for production
    
yarn dev 
// runs the development server for the loader/layer and the frontend example
```


## Example Usage:

```typescript
import React from 'react'
import { PMTLayer } from "@maticoapp/deck.gl-pmtiles";
import DeckGL from "@deck.gl/react/typed";

const INITIAL_VIEW_STATE = {
  longitude: -80,
  latitude: 37,
  zoom: 6,
  pitch: 0,
  bearing: 0,
};

const Example: React.FC = () => {
    const Layers = [
        new PMTLayer({
            id: "pmtiles-layer",
            data: "https://protomaps-static.sfo3.digitaloceanspaces.com/mantle-trial.pmtiles",
            getFillColor: [255, 120, 120],
            stroked: true,
            getLineColor: [8, 8, 8],
            lineWidthMinPixels: 1
        })
    ]

    return  <DeckGL
            controller={true}
            layers={layers}
            initialViewState={INITIAL_VIEW_STATE}
            />
}

export default Example

```

## Peer Dependencies

You must also install these packages in your app:

- deck.gl
- pmtiles

## Other Libraries and References


This repo's code builds on existing work adapted from:

- [Deckgl MVT Layer (MIT Licensed)](https://github.com/visgl/deck.gl/blob/master/modules/geo-layers/src/mvt-layer/mvt-layer.ts)
- [@jtmiclat/deck.gl-pmtiles (MIT Licensed)](https://github.com/jtmiclat/deck.gl-pmtiles) 
- [PMtiles Leaflet and Maplibre implementations (BSD-3 license)](https://github.com/protomaps/PMTiles/tree/master/js)