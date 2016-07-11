import angular from 'angular';
import AppComponent from './app.component';
import Stations from './Stations';
import uiRouter from 'angular-ui-router';

const root = angular
  .module('bicloo', [
    Stations,
    uiRouter
  ])
  .component('app', AppComponent);

export default root;
