import controller from './stations-list.controller'

const StationsListComponent = {
  bindings: {
    stations: "<",
    onGoToDetails: '&'
  },
  controller,
  template: `
  <table>
    <thead>
      <tr><th>Address</th><th>Available Bicloo</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr ng-repeat="station in $ctrl.stations">
        <td>
        <a href="" ng-click="$ctrl.goToDetails(station.number)">{{station.address}}</a>
        </td>
        <td>
          {{station.available_bikes}}
        </td>
        <td>
          <span class="{{station.status.toLowerCase()}}"></span>
        </td>
      </tr>
    </tbody>
  </table>
  `
};

export default StationsListComponent
