import angular from 'angular';
import MapComponent from './map.component';
import MapService from './map.service';

const map = angular
  .module('map', [])
  .component('leafmap', MapComponent)
  .service('MapService', MapService)
  .name;

export default map;
