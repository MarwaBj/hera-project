const insertToCart = require('../database/queries/insertToCart');

module.exports = (req, res) => {
  console.log('typeof req.body', typeof req.body);
  insertToCart(req.body, (error, result) => {
    if (error) throw new Error(error);
    res.send(result);
  });
};
