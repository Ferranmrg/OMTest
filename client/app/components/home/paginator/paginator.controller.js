import _ from 'lodash';

class PaginatorController {
  constructor() {
    this._ = _;
  }

  onClick(pageNumber){
   this.onChangePage({$event: {page : pageNumber + 1}});
  }

  getRange(initial,total){
    return this._.range(initial,total);
  }
}

export default PaginatorController;
