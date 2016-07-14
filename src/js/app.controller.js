class AppController{
  constructor(StationsService){
    this.StationsService = StationsService;
  }

  $onInit() {
    this.stationsPositions = [];
    this.StationsService.getAll().then( stations => this.stationsPositions = stations.map( station => [station.position.lat, station.position.lng] ) );
  }
}

AppController.$inject = ['StationsService'];

export default AppController;
