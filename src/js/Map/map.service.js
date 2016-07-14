import L from 'leaflet';
import LRouter from 'leaflet-routing-machine';

class MapService {
  constructor(){

  }

  getDistance(from, to){
    return new Promise((resolve, reject) => {
      let routing = L.Routing.control({
        waypoints: [
          L.latLng(from[0], from[1]),
          L.latLng(to[0], to[1])
        ]
      });
      routing.on('routesfound', function({routes}){
          resolve(routes
            .reduce((prevRoute, route) => ((prevRoute.summary.totalDistance < route.summary.totalDistance) ? prevRoute.summary.totalDistance : route.summary.totalDistance))
          );
      });
    });
  }
}

export default MapService;
