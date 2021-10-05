import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config(__dirname, '.env')

mongoose.connect(process.env.DB_URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err))