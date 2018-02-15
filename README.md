# react-point-map

Base react component for point.map

## Installation

```bash
npm install --save @simpals-dev/react-point-map
```

## Example Usage

```jsx
import React from 'react';
import Map, { Marker } from '@simpals-dev/react-point-map';

export default () => (
  <Map width={800} height={600}>
    <Marker lat={47.0229} lng={28.8353} />
  </Map>
);
```
