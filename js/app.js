require('angular');
require('angular-ui-router');
require('restangular');
require('webrtc-adapter');

const _ = require('lodash'),

angular.module('room-share', ['ui.router', 'restangular']).constant('_', _)
  .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider){
    RestangularProvider.setBaseUrl('https://api.jcdecaux.com/vls/v1/');
    RestangularProvider.setRequestSuffix('&apikey=f9d62cfb40a43eb37ebb196f3d80fd24d6a299e7');
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'js/Home/home.html',
      controller: 'HomeController',
      views:{
        'stations@home': {
          controller: 'StationsController',
          templateUrl: 'stations.html',
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
      url: '/bicloo',
      template : '<ui-view/>'
    })
    .state('stations.detail',{
      url: '/:stationId',
      templateUrl: 'js/Room/partials/room.connected.html',
      controller: 'RoomsController',
      resolve: {
        room: function(RoomsService, $stateParams){
          debugger;
          return RoomsService.getRoom($stateParams.roomId);
        }
      }
    })
}]);
