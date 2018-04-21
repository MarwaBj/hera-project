const fs = require('fs');
const path = require('path');
const tempdb = require('../tempdb.json');

module.exports = (cartObj, cb) => {
  if (!tempdb) return cb(new Error('Database not found'));
  tempdb.users[0].user_cart.push(cartObj);
  fs.writeFileSync(path.join(__dirname, '..', 'tempdb.json'), JSON.stringify(tempdb), (error) => {
    if (error) return cb(new Error(error));
    cb(null, 'Added object to database successfully');
  });
};
