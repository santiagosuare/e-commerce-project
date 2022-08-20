const express = require("express");
const loginRouter = express.Router();

const {
  readUserByNameAndPassword,
  infoUserLog,
} = require("../controllers/login.controller.js");

loginRouter.get("/", readUserByNameAndPassword);
loginRouter.get("/infoUserLog", infoUserLog);

module.exports = loginRouter;
