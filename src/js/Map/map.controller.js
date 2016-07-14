class MapController {
  constructor($element) {
    this.$element = $element;
    this.osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    this.defaultView = {
      position: [47.2191116,-1.5619153],
      zoom: 13
    }
    this.markers = [];
  }

  $onChanges(changes){
    if(changes.positions){
      let positionArray = (this.positions.some(position => Array.isArray(position)) || this.positions.length === 0) ? this.positions : [this.positions];
      this.markers = positionArray.map( position => L.marker( new L.LatLng(position[0], position[1])));
      this.addMarkerToMap();
    }
  }

  $postLink() {
    this.map = L.map(this.$element.find('div')[0]);
    L.tileLayer(this.osmUrl, {minZoom:8, maxZoom: 16, attribution: this.osmAttrib})
      .addTo(this.map);
    this.addMarkerToMap();
    if(this.markers.length === 1){
      this.map.setView(this.markers[0].getLatLng(), 16);
    } else {
      this.map.setView(this.defaultView.position, this.defaultView.zoom);
    }
  }

  //We can add params to our function here
  //But we're in a class.
  addMarkerToMap(){
    if(this.map){
      this.markers.forEach( marker => marker.addTo(this.map) )
    }
  }
}

MapController.$inject = ['$element']

export default MapController;
