import template from './resultCounter.html';
import './resultCounter.scss';

let resultCounterComponent = {
  bindings: {
    firstResult: '<',
    lastResult: '<',
    total: '<',
  },
  template,
};

export default resultCounterComponent;
