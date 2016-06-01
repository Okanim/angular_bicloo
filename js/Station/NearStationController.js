require('angular');

angular.module('bicloo')
  .controller('NearStationController', ['StationsService', '$scope', '$geolocation', function(StationsService, $scope, $geolocation){

    $scope.needABicloo = function(){
      StationsService.getNearestStations(station => station.available_bikes > 0, 0.5).then( stations => {
        delete $scope.error;
        if(stations.length > 0){
          $scope.stations = stations;
        } else {
          $scope.error = "Stations non trouvées"
        }
      })
    }

    $scope.throwABicloo = function(){
      StationsService.getNearestStations(position.coords, station => station.available_bike_stands > 0, 0.5).then( stations => {
        delete $scope.error;
        if(stations.length > 0){
          $scope.stations = stations;
        } else {
          $scope.error = "Stations non trouvées"
        }
      });
    }
  }])
