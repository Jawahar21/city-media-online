const express = require('express');
const router = express.Router();
const db = require("../models");


////////////////////////////////////////// GET //////////////////////////////////////////

/**
 * API to get all movies
 */
router.get("/movies", (req, res) => {
    db.Movie.findAll().then(movies => res.send(movies));
});

/**
 * API to get list of movies based on its genre ID
 */
router.get("/movies/:genreID", (req, res) => {
    db.Movie.findAll({
        where: {
            GenreId: req.params.genreID
        }
    })
    .then(movie => res.send(movie));
});

/**
 * API to get all genres
 */
router.get("/genres", (req, res) => {
    db.Genre.findAll().then(genres => res.send(genres));
});

/**
 * API to get genre by its ID
 */
router.get("/genre/:id", (req, res) => {
    db.Genre.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(genre => res.send(genre));
});

///////////////////////////////////////// GET END ///////////////////////////////////////

////////////////////////////////////////// POST //////////////////////////////////////////

/**
 * API to post a movie
 */
router.post("/movie", (req, res) => {
    db.Movie.create({
        name: req.body.name,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        imageURL: req.body.imageURL,
        GenreId: req.body.GenreId
    })
    .then(addedMovie => res.send(addedMovie))
    .catch((error) => {
        res.send(error.message);
    });
});

/**
 * API to posr a genre
 */
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

/**
 * API to update movie
 */
router.put("/movie/:id", (req, res) => {
    db.Movie.update({
        name: req.body.name,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        imageURL: req.body.imageURL,
        GenreId: req.body.GenreId
    },
    {
        where: { id: req.params.id}
    })
    .then(async () => {
        const updatedMovie = await db.Movie.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(updatedMovie); 
    })
    .catch((error) => {
        res.send(error.message);
    });
});

/**
 * API to update genre
 */
router.put("/genre/:id", (req, res) => {
    db.Genre.update({
        name: req.body.name,
        imageURL: req.body.imageURL,
    },
    {
        where: { id: req.params.id}
    })
    .then(async () => {
        const updatedGenre = await db.Genre.findOne({
            where: {
                id: req.params.id
            }
        });
        res.send(updatedGenre); 
    })
    .catch((error) => {
        res.send(error.message);
    });
});

///////////////////////////////////////// PUT END ////////////////////////////////////////////
module.exports = router;