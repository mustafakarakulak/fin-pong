const express = require("express");
const { createMessage, getMessages } = require("../Controllers/messageController");

const routes = express.Router();


routes.post("/", createMessage);
routes.get("/:chatId", getMessages);

module.exports = routes;

