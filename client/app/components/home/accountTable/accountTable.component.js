import template from './accountTable.html';
import controller from './accountTable.controller';
import './accountTable.scss';

let accountTableComponent = {
  bindings: {
    accounts: '<',
    changeSortOrder: '&'
  },
  template,
  controller,
};

export default accountTableComponent;
