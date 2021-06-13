const express = require('express');
const router = express.Router();
const db = require("../models");


////////////////////////////////////////// GET //////////////////////////////////////////

router.get("/movies", (req, res) => {
    db.Movie.findAll().then(movies => res.send(movies));
});

router.get("/movie/:id", (req, res) => {
    db.Movie.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(movie => res.send(movie));
});

router.get("/genres", (req, res) => {
    db.Genre.findAll().then(genres => res.send(genres));
});

router.get("/genre/:id", (req, res) => {
    db.Genre.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(genre => res.send(genre));
});

///////////////////////////////////////// GET END ///////////////////////////////////////

////////////////////////////////////////// POST //////////////////////////////////////////

router.post("/movie", (req, res) => {
    db.Movie.create({
        name: req.body.name,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        imageURL: req.body.imageURL,
        GenreId: req.body.genreID
    })
    .then(addedMovie => res.send(addedMovie))
    .catch((error) => {
        res.send(error.message);
    });
});

router.post("/genre", (req, res) => {
    db.Genre.create({
        name: req.body.name,
        imageURL: req.body.imageURL,
    })
    .then(addedGenre => res.send(addedGenre))
    .catch((error) => {
        res.send(error.message);
    });
});

///////////////////////////////////////// POST END ///////////////////////////////////////////

///////////////////////////////////////// PUT ////////////////////////////////////////////////

router.put("/movie/:id", (req, res) => {
    db.Movie.update({
        name: req.body.name,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        imageURL: req.body.imageURL,
        GenreId: req.body.genreID
    },
    {
        where: { id: req.params.id}
    })
    .then(async updatedGenreID => {
        const updatedGenre = await db.Movie.findAll({
            where: {
                id: updatedGenreID
            }
        });
        res.send(updatedGenre); 
    })
    .catch((error) => {
        res.send(error.message);
    });
});

router.put("/genre/:id", (req, res) => {
    db.Genre.create({
        name: req.body.name,
        imageURL: req.body.imageURL,
    },
    {
        where: { id: req.params.id}
    })
    .then(async updatedMovieID => {
        const updatedMovie = await db.Genre.findAll({
            where: {
                id: updatedMovieID
            }
        });
        res.send(updatedMovie); 
    })
    .catch((error) => {
        res.send(error.message);
    });
});

///////////////////////////////////////// PUT END ////////////////////////////////////////////
module.exports = router;