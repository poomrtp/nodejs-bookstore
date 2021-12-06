const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema({
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
  collection: 'books'
})

module.exports = mongoose.model('Book', bookSchema)