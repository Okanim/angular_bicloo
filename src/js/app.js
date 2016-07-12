import angular from 'angular';
import AppComponent from './app.component';
import Stations from './Stations';
import uiRouter from 'angular-ui-router';

const root = angular
  .module('bicloo', [
    Stations,
    uiRouter
  ])
  .component('app', AppComponent)
  .run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  });

export default root;
