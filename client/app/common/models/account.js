import _ from 'lodash';
import AccountSchema from '../schemas/account';

export default class Account {
  constructor(account) {
    this.omnea_id = _.get(account, AccountSchema.omnea_id);
    this.company_name = _.get(account, AccountSchema.company_name);
    this.street = _.get(account, AccountSchema.street);
    this.postcode = _.get(account, AccountSchema.postcode);
    this.city = _.get(account, AccountSchema.city);
    this.phone = _.get(account, AccountSchema.phone);
    this.plan = _.get(account, AccountSchema.plan);
    this.directories = _.get(account, AccountSchema.directories);
    this.last_submission = new Date(_.get(account, AccountSchema.last_submission));
  }
}
