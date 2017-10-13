import angular from 'angular';
import Navbar from './navbar/navbar';
import Accounts from './accounts/accounts';
import Auth from './services/auth.service';

let commonModule = angular.module('app.common', [
  Navbar,
  Accounts,
])
.service('authService', Auth)
.name;

export default commonModule;
