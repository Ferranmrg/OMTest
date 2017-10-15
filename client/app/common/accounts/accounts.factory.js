import Account from 'common/models/account';

let AccountsFactory = function () {
  let accounts = [];

  let getAccounts = () => {
    return accounts;
  };

  let buildAccounts = (rawAccounts) => {
    return rawAccounts.map(mapAccount);
  };

  function mapAccount(rawAccount) {
    return new Account(rawAccount);
  }

  return { getAccounts, buildAccounts };
};

export default AccountsFactory;
