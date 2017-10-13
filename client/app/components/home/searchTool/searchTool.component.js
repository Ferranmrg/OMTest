import template from './searchTool.html';
import controller from './searchTool.controller';
import './searchTool.scss';

let searchToolComponent = {
  bindings: {
    searchCriteria : '<',
    onSearchChange : '&',
  },
  template,
  controller
};

export default searchToolComponent;
