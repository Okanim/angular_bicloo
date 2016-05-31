require('angular');

angular.module('bicloo')
  .controller('NearStationController', ['StationsService', '$scope', '$geolocation', function(StationsService, $scope, $geolocation){

    $scope.needABicloo = function(){
      $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            StationsService.getNearestStations(position.coords, station => station.available_bikes > 0)
              .then( stations => {
                delete $scope.error;
                if(stations.length > 0){
                  $scope.stations = stations;
                } else {
                  $scope.error = "Stations non trouvées"
                }
              })
         });
    }

    $scope.throwABicloo = function(){
      $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            StationsService.getNearestStations(position.coords, station => station.available_bike_stands > 0).then( stations => {
              delete $scope.error;
              if(stations.length > 0){
                $scope.stations = stations;
              } else {
                $scope.error = "Stations non trouvées"
              }
            });
         });
    }
  }])
