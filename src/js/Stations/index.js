import angular from 'angular';
import Restangular from 'restangular';
//Restangular need lodash to work
import _ from 'lodash';
import ngGeolocation from 'ngGeolocation';
import StationsComponent from './stations.component';
import StationsService from './stations.service';
import StationDetails from './StationDetails';
import StationsList from './StationsList';
import StationsFilter from './stations.filter';

//Restangular is the only one that we can't have his name when we import it
const stations = angular
  .module('stations', [
    'restangular',
    ngGeolocation,
    StationDetails,
    StationsList
  ])
  .component('stations', StationsComponent)
  .service('StationsService', StationsService)
  .config(($stateProvider, $urlRouterProvider, RestangularProvider) => {
    RestangularProvider.setBaseUrl('https://api.jcdecaux.com/vls/v1/');
    RestangularProvider.setRequestSuffix('?contract=Nantes&apiKey=f9d62cfb40a43eb37ebb196f3d80fd24d6a299e7');
    $urlRouterProvider.otherwise('/home');
    //Suppress view system, we don't need this here.
    //Resolve can't be fetched when its in view with ui-router 1.0.0-alpha.5
    //See this issue for more information : https://github.com/angular-ui/ui-router/issues/2858
    $stateProvider.state('home', {
      url: '/home',
      component: 'stations',
      resolve: {
        stations: StationsService => {
              return StationsService.getAll();
        }
      }
    });
  })
  .filter('removeNoise', StationsFilter.removeNoise)
  .name;

export default stations;
