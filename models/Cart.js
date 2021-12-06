const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  bookType: {
    type: String
  },
  price: {
    type: Number
  },
  image: {
    type: String
  }
}, {
  collection: 'cart'
})

module.exports = mongoose.model('cart', cartSchema)