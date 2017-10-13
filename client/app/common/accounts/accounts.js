import angular from 'angular';
import AccountsFactory from './accounts.factory';

let accountsModule = angular.module('accounts', [])

.factory('Accounts', AccountsFactory)

.name;

export default accountsModule;
