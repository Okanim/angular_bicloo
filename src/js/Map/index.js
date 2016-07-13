import angular from 'angular';
import MapComponent from './map.component';

const map = angular
  .module('map', [])
  .component('leafmap', MapComponent)
  .name;

export default map;
