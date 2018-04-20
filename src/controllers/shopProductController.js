module.exports = (req, res) => {
  let { product } = req.params;
  product = product.charAt(0).toUpperCase() + product.slice(1);
  res.render('shop', { title: `${product} Shop`, style: 'shop' });
};
