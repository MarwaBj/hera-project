const express = require('express')
const contact = require('./contact')

const router = express.Router()

module.exports = router
  .get('/contact', contact.get)
