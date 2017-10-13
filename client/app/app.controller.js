class AppController {
  constructor(authService,$scope) {
    'ngInject';
    this.authService = authService;
    this.scope = $scope;
  }
  $onInit(){
    const username = "test@test.test"
    const password = "testtest"
    this.authService.initToken(username, password).then((response) => {
      this.loaded = true;
      this.scope.$apply();
    });
  }
}

export default AppController;
