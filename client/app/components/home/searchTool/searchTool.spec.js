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

  describe('Controller', () => {
    // controller specs
    it('has all required properties', () => {
      let controller = makeController();
      expect(controller).to.have.property('searchText');
      expect(controller).to.have.property('displayAdvanced');
      expect(controller).to.have.property('searchText');
      expect(controller).to.have.property('maxPerPage');
      expect(controller).to.have.property('city');
    });

    it('makes raw criteria on init hook', () => {
      let controller = makeController();
      controller._startMultiselect = () => null;
      controller.$onInit();
      expect(controller).to.have.property('rawCriteria');
    });

    it('changes search text', ()=> {
      let controller = makeController();
      controller.searchCriteria = {
        "order": "DESC",
        "orderBy": '',
        "page": 1,
        "pageSize": 3,
        "search": '',
        "filter": {},
      };
      controller.searchText = 'test';
      controller.onSearchChange = () => null;
      controller.changeSearchText()
      expect(controller.searchCriteria.search).to.eq('test');
    });

    it('not changes search text under 3 chars', ()=> {
      let controller = makeController();
      controller.searchCriteria = {
        "order": "DESC",
        "orderBy": '',
        "page": 1,
        "pageSize": 3,
        "search": '',
        "filter": {},
      };
      controller.searchText = 'te';
      controller.onSearchChange = () => null;
      controller.changeSearchText()
      expect(controller.searchCriteria.search).to.not.eq('te');
    });

    it('change state of advanced filter display', () => {
      let controller = makeController();
      let initial = controller.displayAdvanced;
      controller.toggleAdvanced();
      expect(controller.displayAdvanced).to.not.eq(initial);
    });

    it('resets the data', () => {
      let controller = makeController();
      controller._resetMultiSelect = () => null;
      controller.onSearchChange = () => null;
      controller._startMultiselect = () => null;
      controller.$onInit();
      controller.searchCriteria = {};
      controller.maxPerPage = 4;
      controller.searchText = 'some';
      controller.reset();
      expect(controller.maxPerPage).to.eq(3);
      expect(controller.searchText).to.eq('');
      expect(controller.searchCriteria).to.not.be.empty;
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
