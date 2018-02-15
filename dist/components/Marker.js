'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLeafletUniversal = require('react-leaflet-universal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-import '../assets/marker.svg' */

// SVG inling is process by babel plugin
var MarkerIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjMgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHRpdGxlPlBvaW50Lk1hcCAvIE1hcmtlcjwvdGl0bGU+CiAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8ZyBmaWxsPSIjRkY2NzAyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICA8cGF0aCBkPSJNMjMsMTEuNTkwOTA5MSBDMjMsNS4xNzA0NTQ1NSAxNy44NzAwOTgsMCAxMS41LDAgQzUuMTI5OTAxOTYsMCAwLDUuMTcwNDU0NTUgMCwxMS41OTA5MDkxIEMwLDE4LjAxMTM2MzYgMTEuNSwzMCAxMS41LDMwIEMxMS41LDMwIDIzLDE4LjAxMTM2MzYgMjMsMTEuNTkwOTA5MSBaIE04LDkuODAyNjE4NTggQzgsNy42MzU3MjY1NCA5Ljc3Nzc5OTI4LDUuODQzODczNTIgMTEuOTI3Njk2MSw1Ljg0Mzg3MzUyIEMxNC4wNzc1OTI5LDUuODQzODczNTIgMTUuODU1MzkyMiw3LjU5NDA1NTU0IDE1Ljg1NTM5MjIsOS44MDI2MTg1OCBDMTUuODU1MzkyMiwxMS45Njk1MTA2IDE0LjExODkzNywxMy43NjEzNjM2IDExLjkyNzY5NjEsMTMuNzYxMzYzNiBDOS43Nzc3OTkyOCwxMy43NjEzNjM2IDgsMTEuOTY5NTEwNiA4LDkuODAyNjE4NTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K';


var Marker = function Marker(props) {
  var icon = new window.L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [30, 39],
    iconAnchor: [15, 42]
  });

  return _react2.default.createElement(_reactLeafletUniversal.Marker, {
    position: [props.lat, props.lng],
    icon: icon,
    onClick: props.onClick
  });
};

exports.default = Marker;