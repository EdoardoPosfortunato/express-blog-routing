import express from "express"

import {films} from "../films.js"


const router = express.Router()

// INDEX
router.get("/", (req, res) => {
  res.json({
    data: films,
    count: films.length,
  });
});

// SHOW
router.get("/:id", (req, res) => {
  const filmId = req.params.id;
  const film = films.find((curFilm) => curFilm.id == filmID);
  res.json({
    data: film,
  });
});


// STORE
router.post("/", (req, res) => {
  res.json({
    data: "Aggiungo un nuovo gioco",
  });
});


// UPDATE
router.put("/:id", (req, res) => {
  const filmId = req.params.id;
  res.json({
    data: `Modifico un singolo gioco con id ${filmId}`,
  });
});


// DESTROY
router.delete("/:id", (req, res) => {
  const filmId = req.params.id;
  res.json({
    data: `Cancello un gioco con id ${filmId}`,
  });
});



export default router