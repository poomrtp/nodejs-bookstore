const express = require('express')
const cartRoute = express.Router()

let CartModel = require('../models/Cart')

cartRoute.route('/cart').get((req, res, next) => {
  CartModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

cartRoute.route('/add-to-cart').post((req, res, next) => {
  CartModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})
module.exports = cartRoute