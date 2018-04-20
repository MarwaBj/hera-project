const express = require('express');
const { Error404Client } = require('./errorController');
const landingPageController = require('./landingPageController');
const shopProductController = require('./shopProductController');

const Router = express.Router();

Router.get('/', landingPageController);
Router.get('/shop/:product', shopProductController);
Router.use(Error404Client);

module.exports = Router;
