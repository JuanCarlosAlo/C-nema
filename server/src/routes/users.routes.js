const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.get("/all-users", controller.getAllUsers);
usersRoutes.get("/userById/:id", controller.getUserId);
usersRoutes.get("/get-list/:id", controller.getList);
usersRoutes.get("/get-all-list-items/:id", controller.getListItems);
usersRoutes.post("/create-user", controller.createUser);
usersRoutes.post("/edit-user/:id", controller.editUser);
usersRoutes.post("/add-to-list/:id", controller.addToList);
usersRoutes.post("/add-to-watched/:id", controller.addWatched);
usersRoutes.delete("/delete-user/:id", controller.deleteUser);

module.exports = usersRoutes;
