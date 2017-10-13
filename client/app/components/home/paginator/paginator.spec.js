import PaginatorModule from './paginator';
import PaginatorController from './paginator.controller';
import PaginatorComponent from './paginator.component';
import PaginatorTemplate from './paginator.html';

describe('Paginator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PaginatorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PaginatorController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has implemented lodash', () => {
      let controller = makeController();
      expect(controller).to.have.property('_');
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PaginatorComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PaginatorTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PaginatorController);
    });
  });
});
