import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeService from './home.service';
import AccountTable from './accountTable/accountTable';
import Paginator from './paginator/paginator';
import ResultCounter from './resultCounter/resultCounter';
import SearchTool from './searchTool/searchTool';

let homeModule = angular.module('home', [
  uiRouter,
  AccountTable,
  Paginator,
  ResultCounter,
  SearchTool,
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
.service('homeService',homeService)
.component('home', homeComponent)

.name;

export default homeModule;
