let express = require('express')
let cors = require('cors')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let database = require('./database')

mongoose.Promise = global.Promise
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected')
}, error => {
  console.log(`Cannot connect to database ${error}`)
})

const bookAPI = require('./routes/book.route')
const cartAPI = require('./routes/cart.route')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cors())
app.use('/api', bookAPI)
app.use('/api', cartAPI)
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`Connted to port ${port}`)
})

// app.use((req, res, next) => {
//   next(createError(404))
// })

app.use(function(err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})