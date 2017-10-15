class AppController {
  constructor(authService,$scope) {
    'ngInject';
    this.authService = authService;
    this.scope = $scope;
  }
  $onInit(){
    // This should come from a form component
    // by now, it's hardcoded
    const username = "test@test.test"
    const password = "testtest"
    this.authService.initToken(username, password).then((response) => {
      this.loaded = true;
    },(reason) => {
      this.errored = true; //Redirect on deferred reject
    });
  }
}

export default AppController;
