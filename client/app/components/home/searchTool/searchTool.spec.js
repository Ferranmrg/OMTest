import SearchToolModule from './searchTool';
import SearchToolController from './searchTool.controller';
import SearchToolComponent from './searchTool.component';
import SearchToolTemplate from './searchTool.html';

describe('SearchTool', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchToolModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchToolController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SearchToolTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SearchToolComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SearchToolTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SearchToolController);
    });
  });
});
