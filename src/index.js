import app from './app';
import "regenerator-runtime/runtime.js";

const PORT = process.env.PORT ||  3000

app.listen(PORT, (req, res) => {
    console.log("Serve running on port 3500");
})