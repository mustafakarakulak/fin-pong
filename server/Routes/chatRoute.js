const express = require("express");
const { createChat, findUserChats, findChat } = require("../Controllers/chatController");

const routes = express.Router();


routes.post("/", createChat);
routes.get("/:userId", findUserChats);
routes.get("/find/:firstId/:secondId", findChat);

module.exports = routes;