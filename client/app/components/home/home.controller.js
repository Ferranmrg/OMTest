class HomeController {
  constructor(homeService, $cookies, Accounts) {
    'ngInject';
    this.homeService = homeService;
    this.cookies = $cookies;
    this.Accounts = Accounts;
    this.orderDirection = "ASC";
    this.orderBy = '';
    this.currentPage = 1;
    this.pageSize = 3;
    this.textSearch = '';
  }

  $onInit(){
    this._buildData();
    this._requestAccounts();
  }

  _requestAccounts() {
    this.homeService.requestAccounts(this.searchCriteria).then((response) => {
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
    this.searchCriteria = {
      "order": this.orderDirection,
      "orderBy": this.orderBy,
      "page": this.currentPage,
      "pageSize": this.pageSize,
      "search": this.textSearch,
      "filter": {},
     };
  }

  changePage({ page }) {
    this.currentPage = page;
    this._buildData();
    this._requestAccounts();
  }

  changeSearch({ searchCriteria }) {
    this.searchCriteria = searchCriteria;
    this._requestAccounts();
  }

  changeOrderBy({ orderBy }) {
    if(orderBy === this.orderBy)
       this._changeOrderAscDesc();

    this.orderBy = orderBy;
    this._buildData();
    this._requestAccounts();
  }

  _changeOrderAscDesc(){
    this.orderDirection = this.orderDirection === 'ASC' ? 'DESC' : 'ASC';
  }
}

export default HomeController;
