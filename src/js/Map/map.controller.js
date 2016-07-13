class MapController {
  constructor($element) {
    this.$element = $element;
    this.osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

  }

  $onInit() {

  }

  $postLink() {
    this.map = L.map(this.$element.find('div')[0]);
    L.tileLayer(this.osmUrl, {minZoom:8, maxZoom: 14, attribution: this.osmAttrib})
      .addTo(this.map);
    this.map.setView([51.505, -0.09], 13);
  }
}

MapController.$inject = ['$element']

export default MapController;
