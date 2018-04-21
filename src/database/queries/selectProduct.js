const tempdb = require('../tempdb.json');

module.exports = (cb) => {
  if (!tempdb) return cb(new Error('Database not found'));
  cb(null, tempdb.products.concert_halls.slice(0, 10));
};
