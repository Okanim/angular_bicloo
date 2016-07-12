class StationsController {
  constructor(StationsService, $state) {
    this.StationsService = StationsService;
    this.$state = $state;
  }

  $onInit() {
    debugger;
    this.stations = this.stations || [];
    if(this.stations.length === 0){
      this.StationsService.getAll()
        .then(stations => this.stations = stations);
    }
  }

  $onChanges(changes){
    if(changes.stationsData){
      this.stations = Object.assign([], this.stationsData);
    }
  }

  needABicloo(){
    this.StationsService
      .getNearestStations(station => station.available_bikes > 0, 0.5)
      .then(stations => this.stations = stations);
  }

  throwABicloo() {
    this.StationsService
      .getNearestStations(stations => station.available_bikes_stands > 0, 0.5)
      .then(stations => this.stations = stations);
  }

  getAll() {
    this.StationsService.getAll().then(stations => this.stations = stations);
  }

  gotToDetails({stationId}) {
    this.$state.go('stations.details', {stationId});
  }
}

StationsController.$inject = [ 'StationsService', '$state'];

export default StationsController;
