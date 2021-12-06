const express = require('express')
const bookRoute = express.Router()

let BookModel = require('../models/Book')

bookRoute.route('/').get((req, res, next) => {
  BookModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

bookRoute.route('/create-book').post((req, res, next) => {
  BookModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})
module.exports = bookRoute