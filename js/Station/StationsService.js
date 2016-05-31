require('angular');

angular.module('bicloo')
.factory('StationsService',['Restangular', function(Restangular){
  let stations = Restangular.all('stations')
return {
  getAll : function(){
    return stations.getList();
  },
  getStationDetails : function(StationId){
    return Restangular.one('stations', stationId);
  }
}
}]);
