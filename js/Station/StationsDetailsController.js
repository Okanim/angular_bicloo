require('angular');

angular.module('bicloo')
  .controller('StationsDetailsController', ['$scope', 'station', function($scope, station){
    $scope.station = station;

  }])
