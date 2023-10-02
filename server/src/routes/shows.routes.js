const express = require("express");
const showsRoutes = express.Router();
const controller = require("../controllers/shows.controller");

showsRoutes.get("/all-shows", controller.getAllShows);
showsRoutes.get("/showById/:id", controller.getShowId);
showsRoutes.post("/create-show", controller.createShow);
showsRoutes.post("/add-view", controller.addView);


module.exports = showsRoutes;
