const DATA_URL = 'https://apidev.omnea.org/ca-internal/accounts';

class homeService {
  constructor($http, $cookies) {
    'ngInject';
    this.http = $http;
    this.cookies = $cookies;
  }

  requestAccounts(data){
    const TOKEN = this.cookies.get('TOKEN');
    let config = {
      headers: {
        Authorization: 'Bearer ' + TOKEN
      }
    }
    return this.http.post(DATA_URL, data, config);
  }
}

export default homeService;
