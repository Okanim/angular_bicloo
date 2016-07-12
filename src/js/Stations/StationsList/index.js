import angular from 'angular';
import StationsListComponent from './stations-list.component';

const stationsList = angular
  .module('stations.list', [])
  .component('stationsList', StationsListComponent)
  .name;

export default stationsList;
