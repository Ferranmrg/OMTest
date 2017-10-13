const MIN_TO_SEARCH = 3;

class SearchToolController {
  constructor() {
    this.searchText = '';
    this.displayAdvanced = false;
    this.maxPerPage = 3;
    this.city = '';
    //TODO enhancement get this data from a service or
    // from the existing ones instead of "harcoding" them
    this.cityOptions = ['Berlin','Münster','Köln','Bremen'];
    this.zipOptions = ['28199','48163','51147','12487'];
  }

  $onInit(){
    this.rawCriteria = {
      "order": "DESC",
      "orderBy": '',
      "page": 1,
      "pageSize": 3,
      "search": '',
      "filter": {},
  }
}


  changeSearchText(){
    if(this.searchText.length < MIN_TO_SEARCH) return;
    this.searchCriteria.search = this.searchText;
    this.onSearchChange({ $event : {searchCriteria :this.searchCriteria}})
  }

  changeCity({ selected }){
    this.searchCriteria.filter.city = selected;
    this.onSearchChange({ $event : {searchCriteria :this.searchCriteria}})
  }

  changeZip({ selected }){
    this.searchCriteria.filter.zip = selected;
    this.onSearchChange({ $event : {searchCriteria :this.searchCriteria}})
  }

  changeMaxPerPage(){
    this.searchCriteria.pageSize = parseInt(this.maxPerPage);
    this.onSearchChange({ $event : {searchCriteria :this.searchCriteria}})
  }

  reset(){
    this.searchCriteria = angular.copy(this.rawCriteria);
    this.onSearchChange({ $event : {searchCriteria :this.searchCriteria}})
    this.maxPerPage = 3;
    this.searchText = '';
    this._resetMultiSelect()
    this.city = [];
  }

  _resetMultiSelect(){
    $('[id="multiselect"]').multiselect('deselectAll', false)
    $('[id="multiselect"]').multiselect('updateButtonText');
  }

  toggleAdvanced (){
    this.displayAdvanced = !this.displayAdvanced;
  }
}

export default SearchToolController;
