import template from './multiselect.html';
import controller from './multiselect.controller';
import './multiselect.scss';

let multiselectComponent = {
  bindings: {
    labelName: '@',
    options: '<',
    onSelect: '&',
  },
  template,
  controller
};

export default multiselectComponent;
