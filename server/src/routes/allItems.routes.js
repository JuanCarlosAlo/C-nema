const express = require("express");
const allItemsRoutes = express.Router();
const controller = require("../controllers/allItems.controller");

allItemsRoutes.get("/all-items", controller.getAllItems);
allItemsRoutes.get("/trending", controller.getTrending);


module.exports = allItemsRoutes;
