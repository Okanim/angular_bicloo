import angular from 'angular';
import StationsListComponent from './station-details.component';

const stationsList = angular
  .module('stations.details', [])
  .component('station-details', StationsComponent)
  .config(($stateProvider) => {
    $stateProvider.state('stations', {
      abstract: true,
      url: '/stations',
      template : '<ui-view/>'
    })
    .state('stations.details',{
      url: '/:stationId',
      component: 'station-details',
      resolve: {
         station: TodoService => StationsService.getStationDetails($stateParams.stationId)
       }
    });
  })
  .name;

export default stationsList;
