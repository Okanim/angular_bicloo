import angular from 'angular';
import Restangular from 'restangular';
import ngGeolocation from 'ngGeolocation';
import StationsComponent from './stations.component';
import StationsService from './stations.service';
import StationDetails from './StationDetails';
import StationsList from './StationsList';
import StationsFilter from './stations.filter';

const stations = angular
  .module('stations', [
    Restangular,
    ngGeolocation,
    StationsDetails,
    StationList
  ])
  .component('stations', StationsComponent)
  .service('StationsService', StationsService)
  .config(($stateProvider, $urlRouterProvider, RestangularProvider) => {
    RestangularProvider.setBaseUrl('https://api.jcdecaux.com/vls/v1/');
    RestangularProvider.setRequestSuffix('?contract=Nantes&apiKey=f9d62cfb40a43eb37ebb196f3d80fd24d6a299e7');
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      template: `
      <div class="">
        <div ui-view="stations"></div>
      </div>`,
      views:{
        'stations@home': {
          component: 'stations',
          resolve: {
            stations: StationsService => StationsService.getAll()
          }
        }
      }
    });
  })
  .filter('removeNoise', StationsFilter.removeNoise)
  .name;

export default stations;
