class StationsController {
  constructor(StationsService, $state) {
    this.StationsService = StationsService;
    this.$state = $state;
  }

  $onInit() {
    this.stations = this.stations || [];
    if(this.stations.length === 0){
      this.StationsService.getAll()
        .then(stations => this.stations = stations);
    }
  }

  needABicloo(){
    this.StationsService
      .getNearestStations(station => station.available_bikes > 0)
      .then(stations => this.stations = [stations]);
  }

  throwABicloo() {
    this.StationsService
      .getNearestStations(stations => station.available_bikes_stands > 0)
      .then(stations => this.stations = [stations]);
  }

  getAll() {
    this.StationsService.getAll().then(stations => this.stations = stations);
  }

  goToDetails({stationId}) {
    this.$state.go('stations.details', {stationId});
  }
}

StationsController.$inject = [ 'StationsService', '$state'];

export default StationsController;
