import template from './paginator.html';
import controller from './paginator.controller';

let paginatorComponent = {
  bindings: {
    pages: '<',
    onChangePage : '&'
  },
  template,
  controller
};

export default paginatorComponent;
