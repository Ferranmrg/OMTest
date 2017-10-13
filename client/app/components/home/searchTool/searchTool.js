import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchToolComponent from './searchTool.component';

let searchToolModule = angular.module('searchTool', [
  uiRouter
])

.component('searchTool', searchToolComponent)

.name;

export default searchToolModule;
