import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import './database'

import cardsRouter from './routes/superCards.route'

const app = express()

// Middelweres
app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({extended: false}))

// Routes

app.use('/api/supercards', cardsRouter)

export default app