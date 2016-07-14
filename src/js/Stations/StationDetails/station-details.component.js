import controller from './station-details.controller';

const StationsListComponent = {
  bindings: {
    station: "<"
  },
  controller,
  template: `
    <div class="details">
      <h1>{{$ctrl.station.name | removeNoise}} <span class="{{$ctrl.station.status | lowercase}} "></span></h1>
      <p>{{$ctrl.station.address}}</p>
      <p> Banking : {{($ctrl.station.banking)?'Yes':'No'}}</p>
      <p> Bonus : {{($ctrl.station.bonus)?'Yes':'No'}}</p>
      <p> Bicloo : {{$ctrl.station.available_bikes}} / {{$ctrl.station.bike_stands}}</p>
      <leafmap positions="$ctrl.stationPosition"></leafmap>
    </div>
  `
};

export default StationsListComponent;
