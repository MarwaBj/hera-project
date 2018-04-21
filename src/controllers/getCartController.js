const { getCart } = require('../database/queries');

module.exports = (req, res) => {
  getCart((error, cartList) => {
    if (error) res.status(500).send('<h1>Error: 500 Internal Server Error</h1>');
    res.render('cart', {
      cartList,
      style: 'cart',
      total: Object.values(cartList.map(cartItem => parseInt(cartItem.price, 10))).reduce((a, b) => a + b, 0)
    });
  });
};
