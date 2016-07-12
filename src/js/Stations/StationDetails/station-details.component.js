const StationsListComponent = {
  bindings: {
    station: "<"
  },
  template: `
    <div class="details">
      <h1>{{$ctrl.station.name | removeNoise}} <span class="{{$ctrl.station.status | lowercase}} "></span></h1>
      <p>{{$ctrl.station.address}}</p>
      <p> Banking : {{($ctrl.station.banking)?'Yes':'No'}}</p>
      <p> Bonus : {{($ctrl.station.bonus)?'Yes':'No'}}</p>
      <p> Bicloo : {{$ctrl.station.available_bikes}} / {{$ctrl.station.bike_stands}}</p>
    </div>
  `
};

export default StationsListComponent;
