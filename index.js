const co = require('co');
const path = require('path');
const fs = require('fs-promise');
const users = require('./users.json');

const usersWithCreditCards = users.filter(user => user.creditcard);
const csv = usersWithCreditCards.reduce((acculator, user) => (
  `${acculator}\n${user.name}, ${user.creditcard}`
), '');

function* createDirectoryIfNeeded(dir) {
  if (!(yield fs.exists(dir))) {
    yield fs.mkdir(dir);
  }
}

const yyyymmdd = () => {
  const now = new Date();
  const mm = now.getMonth() + 1; // getMonth() is zero-based
  const dd = now.getDate();
  return [now.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
};

co(function* writeCSV() {
  const distDir = path.join(__dirname, './dist');
  yield* createDirectoryIfNeeded(distDir);

  const filepath = path.join(distDir, `./${yyyymmdd()}.csv`);
  yield fs.writeFile(filepath, csv, 'utf8');
});
