const insertToCart = require('../database/queries/insertToCart');

module.exports = (req, res) => {
  insertToCart(req.body, (error, result) => {
    if (error) throw new Error(error);
    res.send(result);
  });
};
