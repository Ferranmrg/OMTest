import ResultCounterModule from './resultCounter';
import ResultCounterComponent from './resultCounter.component';
import ResultCounterTemplate from './resultCounter.html';

describe('ResultCounter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ResultCounterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ResultCounterController();
    };
  }));

  describe('Template', () => {
    it('has firstResult', () => {
      expect(ResultCounterTemplate).to.match(/{{\s?\$ctrl\.firstResult\s?}}/g);
    });
    it('has lastResult', () => {
      expect(ResultCounterTemplate).to.match(/{{\s?\$ctrl\.lastResult\s?}}/g);
    });
    it('has total', () => {
      expect(ResultCounterTemplate).to.match(/{{\s?\$ctrl\.total\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ResultCounterComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ResultCounterTemplate);
    });

  });
});
