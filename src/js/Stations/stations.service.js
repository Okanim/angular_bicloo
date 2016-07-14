class StationsService {
  constructor(Restangular, $geolocation, MapService){
    this.stations = Restangular.all('stations');
    this.$geolocation = $geolocation;
    this.Restangular = Restangular;
    this.MapService = MapService;
  }

  getAll() {
    return this.stations.getList();
  }

  getStationDetails(stationId) {
    return this.Restangular.one('stations', stationId).get();
  }

  getNearestStations(optionalCondition = () => true) {
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

    const stationsPromise = this.$geolocation.getCurrentPosition({
      timeout: 60000
    }).then( ({coords}) => {
      return this.getAll()
        .then(stations =>
          Promise.all(stations
            .map( station => this.MapService.getDistance([coords.latitude, coords.longitude], [station.position.lat, station.position.lng]).then( distance => ({station, distance}) ) ))
        )
        .then(stations =>
          stations
            .reduce( (prevStation, station) => {
              debugger;
            if (prevStation.distance < station.distance){
              return (optionalCondition(prevStation.station)) ? prevStation : station;
            } else {
              return (optionalCondition(station.station)) ? station : prevStation;
            }
          }))
      });
   return stationsPromise;
  }
}

StationsService.$inject = ['Restangular', '$geolocation', 'MapService'];

export default StationsService;
