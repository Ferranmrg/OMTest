const SORT_EXCEPTIONS = ['submitted_directories_count','plan.plan_name'];

class AccountTableController {
  constructor() {
    this.headers = {
      id: 'Omnea id',
      company_name: 'Company Name',
      street : 'Street',
      zip : 'Postcode',
      city : 'City',
      phone_number: 'Phone',
      'plan.plan_name': 'Plan',
      submitted_directories_count: 'Directories',
      last_submit: 'Last Submission'
    }
  }

  setOrderBy(header){
    if (SORT_EXCEPTIONS.indexOf(header) !== -1 ) return;
    this.changeSortOrder({$event: {orderBy : header}})
  }
}

export default AccountTableController;
