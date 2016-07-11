class StationsController {
  constructor(StationsService, $state) {
    this.stations = stations;
  }

  $onInit() {
    this.stations = this.stations || [];
    if(this.stations.length > 0){
      StationsService.getAll()
        .then(stations => this.stations = stations);
    }
  }

  needABicloo(){
    .StationsService
      .getNearestStations(station => station.available_bikes > 0, 0.5)
      .then(stations => this.stations = stations);
  }

  throwABicloo() {
    StationsService
      .getNearestStations(stations => station.available_bikes_stands > 0, 0.5)
      .then(stations => this.stations = stations);
  }

  getAll() {
    StationsService.getAll().then(stations => this.stations = stations);
  }

  gotToDetails({stationId}) {
    $state.go('stations.details', {stationId});
  }
}

StationsListController.$inject = [ 'StationsService', '$state'];

export default StationsController;
