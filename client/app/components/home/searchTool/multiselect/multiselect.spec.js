import MultiselectModule from './multiselect';
import MultiselectController from './multiselect.controller';
import MultiselectComponent from './multiselect.component';
import MultiselectTemplate from './multiselect.html';

describe('Multiselect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MultiselectModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MultiselectController();
    };
  }));

  describe('Component', () => {
    // component/directive specs
    let component = MultiselectComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MultiselectTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MultiselectController);
    });
  });
});
