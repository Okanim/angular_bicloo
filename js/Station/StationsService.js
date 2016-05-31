require('angular');

angular.module('bicloo')
.factory('StationsService',['Restangular', '_', function(Restangular){
  let stations = Restangular.all('stations');

  //See http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
    var dLon = (lon2-lon1) * (Math.PI/180);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }
  return {
    getAll : function(){
      return stations.getList();
    },
    getStationDetails : function(stationId){
      return Restangular.one('stations', stationId).get();
    },
    getNearestStations: function(location, optionalCondition= () => true){
      return this.getAll()
                  .then(
                    stations => stations.filter(
                      station => (getDistanceFromLatLonInKm(location.latitude, location.longitude, station.position.lat, station.position.lng) < 0.5)
                                  && optionalCondition(station)
                      )
                    )
    }
  }
}]);
