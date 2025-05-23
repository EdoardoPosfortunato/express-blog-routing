import express from "express"
import { films } from "./films.js";

import moviesRouter from "./routers/movies.js"

const app = express();

const port = 3000;

// console.log(films)


app.get('/', (req, res) => {
    res.send('questa è la pagina iniziale')
})

// app.get('/movies/:id', (req, res) => {
//    res.send(req.params.id)
// })

app.use('/movies', moviesRouter)


app.listen(port, () => {
    console.log(`La porta ${port} è aperta`)
})