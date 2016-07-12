class StationsListController {
  controller(){
  }

  $onInit(){
    debugger;
    this.stationNodes = this.stations
      .reduce((stationNodes, station) => {
        return stationNodes + `
        <tr>
          <td>
            <a href="" ng-click="$ctrl.goToDetails(station.number)">station.address</a>
          </td>
          <td>
            station.available_bikes
          </td>
          <td>
            <span class="station.status.toLowerCase()"></span>
          </td>
        </tr>
        `;
      }, '');
  }

  goToDetails(stationId) {
    this.onGoToDetails(
      EventEmitter({
        stationId: stationId
      })
    );
  }
}

export default StationsListController;
