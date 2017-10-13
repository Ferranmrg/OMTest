import angular from 'angular';
import Accounts from './accounts/accounts';
import Auth from './services/auth.service';

let commonModule = angular.module('app.common', [
  Accounts,
])
.service('authService', Auth)
.name;

export default commonModule;
