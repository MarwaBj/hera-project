const { selectProduct } = require('../database/queries');

module.exports = (req, res) => {
  let { product } = req.params;
  product = product.charAt(0).toUpperCase() + product.slice(1);
  selectProduct((error, result) => {
    if (error) throw new Error(error);
    res.render('shop', {
      title: `${product} Shop`, style: 'shop', script: 'shop', product_result: result
    });
  });
};
