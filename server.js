const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const donutRouter = require('./controllers/donuts')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.use(logger('dev'))

app.use('/', donutRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is listening on port:' + port)
})


