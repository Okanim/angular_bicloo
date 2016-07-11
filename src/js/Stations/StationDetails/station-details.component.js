const StationsListComponent = {
  bindings: {
    station: "<"
  },
  template: `
    <div class="details ">
      <h1>{{station.name | removeNoise}} <span class="{{station.status | lowercase}} "></span></h1>
      <p>{{station.address}}</p>
      <p> Banking : {{(station.banking)?'Yes':'No'}}</p>
      <p> Bonus : {{(station.bonus)?'Yes':'No'}}</p>
      <p> Bicloo : {{station.available_bikes}} / {{station.bike_stands}}</p>
    </div>
  `
};
