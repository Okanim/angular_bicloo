import angular from 'angular';
import StationDetailsComponent from './station-details.component';
import uiRouter from 'angular-ui-router';

const stationDetails = angular
  .module('stations.details', [
    uiRouter
  ])
  .component('station-details', StationDetailsComponent)
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
         station: (StationsService, $stateParams) => StationsService.getStationDetails($stateParams.stationId)
       }
    });
  })
  .name;

export default stationDetails;
