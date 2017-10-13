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
    it('has a headers property ', () => {
      let controller = makeController();
      expect(controller).to.have.property('headers');
    });

    it('should send change order event', () => {
      let controller = makeController();
      let called = false
      controller.changeSortOrder = ($event) => {called = !called};
      controller.setOrderBy('company_name')
      expect(called).to.be.ok;
    })
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
