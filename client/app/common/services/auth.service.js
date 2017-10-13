const LOGIN_URL = 'https://apidev.omnea.org/auth/login';
import q from 'Q';
class auth {
  constructor($http, $cookies) {
    'ngInject';
    this.http = $http;
    this.cookies = $cookies;
  }

  initToken(username, password){
    let defer = q.defer();
    let promise = defer.promise;

    if(!this._checkIfValidToken()) {
      this._requestToken(username,password).then((response)=> {
        defer.resolve()
      });
    }else{
      defer.resolve();
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
    return this.http.post(LOGIN_URL, data, config).then(
      (response) => {
        this.cookies.put('TOKEN', response.data.token);
        this.cookies.put('TOKEN_EXP_TIME', response.data.token_exp);
      },
      (error) => {
        console.log(error)
      }
    );
  }
}

export default auth;
