const express = require('express')
const contact = require('./contact')
const planning = require('./planning')
const { Error404Client } = require('./errorController')
const landingPageController = require('./landingPageController')

const router = express.Router()

module.exports = router
  .get('/contact', contact)
  .get('/planning',planning)
  .get('/', landingPageController)
  .use(Error404Client)
