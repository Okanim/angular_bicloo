import angular from 'angular';
import StationsListComponent from './stations-list.component';

const stationsList = angular
  .module('stations.list', [])
  .component('stationsList', StationsListComponent)
  .value('EventEmitter', payload => ({ $event: payload}))
  .name;

export default stationsList;
