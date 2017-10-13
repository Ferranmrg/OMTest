import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resultCounterComponent from './resultCounter.component';

let resultCounterModule = angular.module('resultCounter', [
  uiRouter
])

.component('resultCounter', resultCounterComponent)

.name;

export default resultCounterModule;
