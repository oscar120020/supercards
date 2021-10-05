import app from './app';
import "regenerator-runtime/runtime.js";
import dotenv from 'dotenv'
dotenv.config(__dirname, '.env')

const PORT = process.env.PORT ||  3000

app.listen(PORT, (req, res) => {
    console.log("Serve running on port 3500");
})