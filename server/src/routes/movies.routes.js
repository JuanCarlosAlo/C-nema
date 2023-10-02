const express = require("express");
const moviesRoutes = express.Router();
const controller = require("../controllers/movies.controller");

moviesRoutes.get("/all-movies", controller.getAllmovies);
moviesRoutes.get("/movieById/:id", controller.getMovieId);
moviesRoutes.post("/create-movie", controller.createMovie);
moviesRoutes.post("/add-view", controller.addView);


module.exports = moviesRoutes;
