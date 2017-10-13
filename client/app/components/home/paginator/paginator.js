import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paginatorComponent from './paginator.component';

let paginatorModule = angular.module('paginator', [
  uiRouter
])

.component('paginator', paginatorComponent)

.name;

export default paginatorModule;
