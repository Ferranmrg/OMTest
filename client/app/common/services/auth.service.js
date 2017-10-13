const LOGIN_URL = 'https://apidev.omnea.org/auth/login';

class auth {
  constructor($http, $cookies) {
    'ngInject';
    this.http = $http;
    this.cookies = $cookies;
  }

  initToken(username, password){
    // NOTE : Token exp time doesn't return a valid timestamp
    // so you have to offset 3 numbers to be able to compare dates
    let expTime = this.cookies.get('TOKEN_EXP_TIME');
    const OFFSET3POSITIONS = 1000;

    const TODAY = new Date().getTime() / OFFSET3POSITIONS;
    let isStillValid =  TODAY < expTime;

    if(expTime && isStillValid) return;
    this._requestToken(username,password);
  }

  _requestToken(username, password){
    let data =  {"username" : username, "password" : password};
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*',
      },
    }
    // NOTE: Cors missing, requires changes from back
    // solved with local proxy
    this.http.post(LOGIN_URL, data, config).then(
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
