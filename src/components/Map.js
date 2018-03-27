// @flow

import React, { Fragment } from 'react';
import { Map as LeafletMap } from 'react-leaflet-universal';

// base64 and in js wrapping is processed by babel plugins
import leafletCSSBase64 from 'leaflet/dist/leaflet.css';
import TileLayer from './TileLayer';

type LatLng = {
  lat: number,
  lng: number,
};

type Props = {
  width?: string,
  height?: string,
  lat?: number,
  lng?: number,
  zoom?: number,
  onMoveEnd?: () => any,
  onClick?: () => any,
  children?: any,
};

const defaultProps: Props = {
  width: '100%',
  height: '100%',
  lat: parseFloat(process.env.CHISINAU_CENTER_LAT),
  lng: parseFloat(process.env.CHISINAU_CENTER_LNG),
  zoom: parseInt(process.env.MAP_ZOOM, 10),
};

// Limit map bound to Moldova boundary
const maxBounds = [
  [process.env.MAP_BOUND_NW_LAT, process.env.MAP_BOUND_NW_LNG],
  [process.env.MAP_BOUND_SE_LAT, process.env.MAP_BOUND_SE_LNG],
];

const Map = (props: Props) => (
  <div
    style={{
      width: props.width,
      height: props.height,
      backgroundColor: process.env.MAP_BACKGROUND_COLOR,
    }}
  >
    <link rel="stylesheet" href={leafletCSSBase64} />
    <LeafletMap
      {...props}
      style={{
        width: props.width,
        height: props.height,
      }}
      center={[props.lat, props.lng]}
      zoom={props.zoom}
      onClick={props.onClick}
      maxBounds={maxBounds}
      attributionControl={false}
    >
      {() => (
        <Fragment>
          <TileLayer />
          {props.children}
        </Fragment>
      )}
    </LeafletMap>
  </div>
);

Map.defaultProps = defaultProps;

export default Map;
