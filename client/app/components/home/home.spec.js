import HomeModule from './home'

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(HomeModule, ($provide)=> {
    $provide.value('authService', {
      initToken: (username, pwd) => {token: 'token'}
    });
    $provide.value('$cookies', {
      get: (input) => input
    });
    $provide.value('Accounts', {

    });
  }));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new()
      });
    });

    it('initialices all properties', () => {
      expect(controller).to.have.property('authService');
      expect(controller).to.have.property('cookies');
      expect(controller).to.have.property('Accounts');
      expect(controller).to.have.property('orderDirection');
      expect(controller).to.have.property('orderBy');
      expect(controller).to.have.property('currentPage');
      expect(controller).to.have.property('pageSize');
      expect(controller).to.have.property('textSearch');
    });

    it('should change page', () => {
      controller.changePage({page : 2});
      expect(controller.searchCriteria.page).to.eq(2);
    });
  });
});
