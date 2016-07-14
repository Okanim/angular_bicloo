import controller from './map.controller';

const MapComponent = {
  bindings: {
    positions: '<'
  },
  controller,
  template: `
    <div id="map"></div>
  `
}

export default MapComponent;
