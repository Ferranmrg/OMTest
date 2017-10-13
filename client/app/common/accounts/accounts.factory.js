let AccountsFactory = function () {
  let accounts = [];

  let getAccounts = () => {
    return accounts;
  };

  let buildAccounts = (rawAccounts) => {
    accounts = [];
    rawAccounts.forEach((rawAccount) => {
      accounts.push(_buildAccount(rawAccount))
    });
    return getAccounts();
  };

  let _buildAccount = (rawAccount) => {
    let account = {
      omnea_id : rawAccount.omnea_id || '',
      company_name: rawAccount.basic.name || '',
      street: rawAccount.basic.address.street || '',
      postcode: rawAccount.basic.address.zip || '',
      city: rawAccount.basic.address.city || '',
      phone: rawAccount.basic.phone_number || '',
      plan: rawAccount.plans[0]['plan.plan_name'] || '',
      directories: rawAccount.submitted_directories_count || '',
      last_submission: new Date(rawAccount.last_submit) || '',
    };
    return account;
  }

  return { getAccounts, buildAccounts };
};

export default AccountsFactory;
