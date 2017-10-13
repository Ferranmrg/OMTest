import AccountTableModule from './accountTable';
import AccountTableController from './accountTable.controller';
import AccountTableComponent from './accountTable.component';
import AccountTableTemplate from './accountTable.html';

describe('AccountTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AccountTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AccountTableController();
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
      expect(AccountTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AccountTableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AccountTableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AccountTableController);
    });
  });
});
