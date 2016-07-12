class StationsListController {
  constructor(EventEmitter){
    this.EventEmitter = EventEmitter;
  }

  goToDetails(stationId) {
    this.onGoToDetails(
      this.EventEmitter({
        stationId: stationId
      })
    );
  }
}

StationsListController.$inject = ['EventEmitter'];

export default StationsListController;
