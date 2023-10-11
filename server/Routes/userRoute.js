const express = require("express");
const { registerUser, loginUser, findUser, getUsers} = require("../Controllers/userController");


const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.get("/find/:userId", findUser);
routes.get("/", getUsers);

module.exports = routes;