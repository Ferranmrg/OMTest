const MIN_TO_SEARCH = 3;

class SearchToolController {
  constructor() {
    this.searchText = '';
    this.displayAdvanced = false;
    this.maxPerPage = 3;
    this.city = '';
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
  this._startMultiselect();
}

_startMultiselect(){
  $(document).ready(function() {
       $('#multiselect').multiselect();
   });
}

  changeSearchText(){
    if(this.searchText.length < MIN_TO_SEARCH) return;
    this.searchCriteria.search = this.searchText;
    this.onSearchChange({ $event : {searchCriteria :this.searchCriteria}})
  }

  changeCity(){
    this.searchCriteria.filter.city = this.city;
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
    $('#multiselect').multiselect('deselectAll', false)
    $('#multiselect').multiselect('updateButtonText');
  }

  toggleAdvanced (){
    this.displayAdvanced = !this.displayAdvanced;
  }
}

export default SearchToolController;
