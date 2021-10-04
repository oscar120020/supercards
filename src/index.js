import { listen } from './app';

const PORT = process.env.PORT ||  3000

listen(PORT, (req, res) => {
    console.log("Serve running on port 3500");
})