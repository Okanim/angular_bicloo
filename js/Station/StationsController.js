require('angular');

angular.module('bicloo')
  .controller('StationsController', ['$scope', 'stations', '$state', function($scope, stations, $state){
    $scope.stations = stations;
    $scope.goToStationDetails = function(stationId){
      $state.go('stations.details', {stationId})
    }
  }])
