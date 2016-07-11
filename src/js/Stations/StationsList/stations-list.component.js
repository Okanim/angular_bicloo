import controller from './stations-list.controller'

const StationsListComponent = {
  bindings: {
    stations: "<",
    onGoToDetails: '&'
  },
  controller,
  template: `
  <table>
    <thead>
      <tr><th>Address</th><th>Available Bicloo</th><th>Status</th></tr>
    </thead>
    <tbody>
      {{$ctrl.stationNodes}}
    </tbody>
  </table>
  `
};

export default StationsListComponent
