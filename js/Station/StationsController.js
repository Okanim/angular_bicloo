require('angular');

angular.module('bicloo')
  .controller('StationsController', ['$scope', 'stations', '$state', 'StationsService', function($scope, stations, $state, StationsService){
    $scope.stations = stations;
    $scope.needABicloo = function(){
      StationsService.getNearestStations(station => station.available_bikes > 0, 0.5).then( stations => {
        $scope.stations = stations;
      })
    }
    $scope.throwABicloo = function(){
      StationsService.getNearestStations(position.coords, station => station.available_bike_stands > 0, 0.5).then( stations => {
        $scope.stations = stations;
      });
    }
    $scope.goToStationDetails = function(stationId){
      $state.go('stations.details', {stationId})
    }
    $scope.getAll = function(){
      StationsService.getAll().then( stations => {
        $scope.stations = stations;
      });
    }
  }])
