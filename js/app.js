require('angular');
require('angular-ui-router');
require('restangular');

const _ = require('lodash');

angular.module('bicloo', ['ui.router', 'restangular', 'ngGeolocation']).constant('_', _)
  .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider){
    RestangularProvider.setBaseUrl('https://api.jcdecaux.com/vls/v1/');
    RestangularProvider.setRequestSuffix('?contract=Nantes&apiKey=f9d62cfb40a43eb37ebb196f3d80fd24d6a299e7');
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      views:{
        '@': {
          templateUrl: 'js/Home/home.html'
        },
        'stations@home': {
          controller: 'StationsController',
          templateUrl: 'js/Station/partials/stations.html',
          resolve: {
            stations: function(StationsService){
              return StationsService.getAll();
            }
          }
        }
      }
    })
    .state('stations', {
      abstract: true,
      url: '/stations',
      template : '<ui-view/>'
    })
    .state('stations.details',{
      url: '/:stationId',
      templateUrl: 'js/Station/partials/stationsDetails.html',
      controller: 'StationsDetailsController',
      resolve: {
        station : function(StationsService, $stateParams){
          return StationsService.getStationDetails($stateParams.stationId);
        }
      }
    })
}]).run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}).filter('removeNoise', function(){
  return function(input){
    return input.substring(input.indexOf('-')+1,  input.length);
  }
});

require('./Station/StationsService')
require('./Station/StationsController')
require('./Station/StationsDetailsController')
