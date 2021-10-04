import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import './database'
const app = express()

// Middelweres
app.use(json())
app.use(urlencoded({extended: false}))
app.use(morgan('dev'))

// Routes
app.use('/api/supercards', require('./routes/superCards.route').default)

export default app