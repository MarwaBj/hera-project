const express = require('express');
const contact = require('./contact');
const planning = require('./planning');
const { Error404Client } = require('./errorController');
const getCartController = require('./getCartController');
const postToCartController = require('./postToCartController');
const landingPageController = require('./landingPageController');
const shopProductController = require('./shopProductController');

const Router = express.Router();

Router
  .get('/contact', contact)
  .get('/planning', planning)
  .get('/', landingPageController)
  .get('/', landingPageController)
  .get('/cart', getCartController)
  .get('/shop/:product', shopProductController)
  .get('/shop/:product', shopProductController)
  .post('/postToCart', postToCartController)
  .use(Error404Client);

module.exports = Router;
