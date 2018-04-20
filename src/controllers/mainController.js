const express = require('express');
const { Error404Client } = require('./errorController');
const landingPageController = require('./landingPageController');


const Router = express.Router();

Router.get('/', landingPageController);
Router.use(Error404Client);

module.exports = Router;
