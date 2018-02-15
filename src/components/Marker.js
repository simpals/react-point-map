// @flow

import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet-universal';

// SVG inling is process by babel plugin
import MarkerIcon from '../assets/marker.svg';

type Props = {
  lat: number,
  lng: number,
  onClick: () => any,
};

const Marker = (props: Props) => {
  const icon = new window.L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [30, 39],
    iconAnchor: [15, 42],
  });

  return (
    <LeafletMarker
      position={[props.lat, props.lng]}
      icon={icon}
      onClick={props.onClick}
    />
  );
};

export default Marker;
