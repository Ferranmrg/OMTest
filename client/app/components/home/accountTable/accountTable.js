import angular from 'angular';
import uiRouter from 'angular-ui-router';
import accountTableComponent from './accountTable.component';

let accountTableModule = angular.module('accountTable', [
  uiRouter
])

.component('accountTable', accountTableComponent)

.name;

export default accountTableModule;
