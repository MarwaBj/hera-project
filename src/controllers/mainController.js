const express = require('express');
const { Error404Client } = require('./errorController');
const landingPageController = require('./landingPageController');
const shopProductController = require('./shopProductController');
const postToCartController = require('./postToCartController');

const Router = express.Router();

Router.get('/', landingPageController);
Router.get('/shop/:product', shopProductController);
Router.post('/postToCart', postToCartController);
Router.use(Error404Client);

module.exports = Router;
