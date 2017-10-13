import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchToolComponent from './searchTool.component';
import multiselect from './multiselect/multiselect';

let searchToolModule = angular.module('searchTool', [
  uiRouter,
  multiselect
])

.component('searchTool', searchToolComponent)

.name;

export default searchToolModule;
