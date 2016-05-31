require('angular');
require('angular-ui-router');
require('restangular');
require('webrtc-adapter');

const _ = require('lodash'),

angular.module('room-share', ['ui.router', 'restangular']).constant('_', _)
  .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider){
    RestangularProvider.setBaseUrl('https://room-share.firebaseio.com/');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred){
      let dataArray = [];
      for(let uid in data){
        dataArray.push({
          uid,
          data: data[uid]
        });
      }
      deferred.resolve(dataArray);
    });
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'js/Home/home.html',
      controller: 'HomeController',
      resolve: {
        rooms: function(RoomsService){
          return RoomsService.getRooms();
        }
      }
    })
    .state('home.rooms', {
      url: '/rooms'
    })
    .state('home.rooms.connect',{
      url: '/:roomId',
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
