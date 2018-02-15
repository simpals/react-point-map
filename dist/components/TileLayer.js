'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLeafletUniversal = require('react-leaflet-universal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TileLayer = function TileLayer() {
  return _react2.default.createElement(_reactLeafletUniversal.TileLayer, {
    url: process && process.env && process.env.POINT_TILES_URL || 'https://i.simpalsmedia.com/map/1/{z}/{x}/{y}.png',
    minZoom: process && process.env && process.env.MAP_MIN_ZOOM || '8',
    maxZoom: process && process.env && process.env.MAP_MAX_ZOOM || '20',
    attribution: false,
    detectRetina: true
  });
};

exports.default = TileLayer;