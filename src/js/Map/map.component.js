import controller from './map.controller';

const MapComponent = {
  bindings: {
    markers: '<'
  },
  controller,
  template: `
    <div id="map"></div>
  `
}

export default MapComponent;
