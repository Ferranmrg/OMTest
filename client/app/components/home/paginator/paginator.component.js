import template from './paginator.html';
import controller from './paginator.controller';
import './paginator.scss';

let paginatorComponent = {
  bindings: {
    pages: '<',
    onChangePage : '&'
  },
  template,
  controller
};

export default paginatorComponent;
