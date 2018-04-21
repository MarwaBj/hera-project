const tempdb = require('../tempdb.json');

module.exports = (cb) => {
  if (!tempdb) return cb(new Error('Database not found'));
  cb(null, tempdb.users[0].user_cart);
};
