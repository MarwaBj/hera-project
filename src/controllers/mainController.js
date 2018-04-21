const express = require('express')
const contact = require('./contact')
const planning = require('./planning')
const { Error404Client } = require('./errorController')
const landingPageController = require('./landingPageController')
const shopProductController = require('./shopProductController');
const postToCartController = require('./postToCartController');

const Router = express.Router();

Router
  .get('/', landingPageController)
  .get('/shop/:product', shopProductController)
  .post('/postToCart', postToCartController)
  .get('/contact', contact)
  .get('/planning',planning)
  .get('/', landingPageController)
  .use(Error404Client);

module.exports = Router;
