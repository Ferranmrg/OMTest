const LOGIN_URL = 'https://apidev.omnea.org/auth/login';

class Auth {
  constructor($http, $cookies, $q) {
    'ngInject';
    this.http = $http;
    this.cookies = $cookies;
    this.q = $q;
  }

  initToken(username, password){
    let defered = this.q.defer();
    let promise = defered.promise;

    if(!this._checkIfValidToken()) {
      this._requestToken(username,password).then((response)=> {
        this.cookies.put('TOKEN', response.data.token);
        this.cookies.put('TOKEN_EXP_TIME', response.data.token_exp);
        defered.resolve();
      },(error) => {
        defered.reject();
      });
    }else{
      defered.resolve();
    }

    return promise;
  }

  _checkIfValidToken(){
    // NOTE : Token exp time doesn't return a valid timestamp
    // so you have to offset 3 numbers to be able to compare dates
    let expTime = this.cookies.get('TOKEN_EXP_TIME');
    const OFFSET3POSITIONS = 1000;

    const TODAY = new Date().getTime() / OFFSET3POSITIONS;
    let isStillValid =  TODAY < expTime;

    return expTime && isStillValid;
  }

  _requestToken(username, password){
    let data =  {"username" : username, "password" : password};
    let config = {
      headers: {
        "Content-Type": "application/json"
      },
    }
    // NOTE: Cors missing, requires changes from back
    // solved with local proxy
    return this.http.post(LOGIN_URL, data, config);
  }
}

export default Auth;
