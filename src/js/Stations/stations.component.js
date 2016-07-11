import controller from './station.controller';

const StationsComponent = {
  bindings:{
    stations: '<'
  },
  controller,
  template: `
    <h1>Bicloo Stations on Nantes</h1>
    <div class="filter">
      <button type="button" name="button" ng-click="$ctrl.needABicloo()">Trouve un bicloo</button>
      <button type="button" name="button" ng-click="$ctrl.throwABicloo()">Debarasse toi de ton bicloo</button><br>
      <button type="button" name="button" ng-click="$ctrl.getAll()">All</button>
    </div>
    <stations-list stations="$ctrl.stations" on-go-to-details="$ctrl.goToDetails($event);"></stations-list>
    </table>
  `
};

export default StationsComponent;
