class StationDetailsController {
  constructor(){
  }

  $onInit() {
    this.stationPosition = [this.station.position.lat, this.station.position.lng];
  }
}

export default StationDetailsController
