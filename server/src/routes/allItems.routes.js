const express = require("express");
const allItemsRoutes = express.Router();
const controller = require("../controllers/allItems.controller");

allItemsRoutes.get("/all-items", controller.getAllItems);


module.exports = allItemsRoutes;
