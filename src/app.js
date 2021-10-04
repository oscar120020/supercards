import express, { json, urlencoded } from 'express'
import './database'

import cardsRouter from './routes/superCards.route'

const app = express()

// Middelweres
app.use(json())
app.use(urlencoded({extended: false}))

// Routes

app.use('/api/supercards', cardsRouter)

export default app