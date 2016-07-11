import angular from 'angular';
import StationsListComponent from './stations-list.component';

const stationsList = angular
  .module('stations.list', [])
  .component('stations-list', StationsComponent)
  .name;

export default stationsList;
