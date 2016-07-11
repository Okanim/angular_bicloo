import angular from 'angular';
import StationsListComponent from './stations-list.component';

const stationsList = angular
  .module('stations.list', [])
  .component('stations-list', StationsComponent)
  .value('EventEmitter', payload => ({ $event: payload})
  .name;

export default stationsList;
