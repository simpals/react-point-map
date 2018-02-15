// @flow

import React from 'react';
import { TileLayer as LeafletTileLayer } from 'react-leaflet-universal';

const TileLayer = () => (
  <LeafletTileLayer
    url={process.env.POINT_TILES_URL}
    minZoom={process.env.MAP_MIN_ZOOM}
    maxZoom={process.env.MAP_MAX_ZOOM}
    attribution={false}
    detectRetina
  />
);

export default TileLayer;
