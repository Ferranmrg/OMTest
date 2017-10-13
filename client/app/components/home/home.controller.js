class HomeController {
  constructor(authService, homeService, $cookies, Accounts) {
    'ngInject';
    this.authService = authService;
    this.homeService = homeService;
    this.cookies = $cookies;
    this.Accounts = Accounts;
    this.orderDirection = "DESC";
    this.orderBy = '';
    this.currentPage = 1;
    this.pageSize = 3;
    this.textSearch = '';
  }

  $onInit(){
    const username = "test@test.test"
    const password = "testtest"
    this.authService.initToken(username, password);
    this._requestAccounts();
  }

  _requestAccounts() {
    let data = this._buildData();
    this.homeService.requestAccounts(data).then((response) => {
      this.currentPage = response.data.page;
      this.pageSize = response.data.pageSize;
      this.rawAccounts = response.data.result;
      this.accounts = this.Accounts.buildAccounts(this.rawAccounts);
      this.accountsSize = response.data.resultSize;
      this.totalSize = response.data.totalSize;
      this.firstItemDisplayed = (this.currentPage * this.pageSize) - this.pageSize + 1;
      this.lastItemDisplayed = (this.currentPage * this.pageSize) >= this.totalSize ? this.totalSize : (this.currentPage * this.accountsSize);
      this.totalPages = Math.ceil(this.totalSize / this.pageSize);
    });
  }

  _buildData(){
    return {
      "order": this.orderDirection,
      "orderBy": this.orderBy,
      "page": this.currentPage,
      "pageSize": this.pageSize,
      "search": this.textSearch,
       // Only with simple search “filter”: {   // Only with advanced search “zip”: [“33233”, “1123”], “city”: [“Berlin”] } }
     };
  }

  changePage({ page }) {
    this.currentPage = page;
    this._requestAccounts();
  }
}

export default HomeController;
