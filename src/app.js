const express = require('express')
const morgan = require('morgan')
require('./database')
const app = express()

// Middelweres
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

// Routes
app.use('/api/supercards', require('./routes/superCards.route'))

module.exports = app