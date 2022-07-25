const express = require("express");
const userRouter = express.Router();
const {
  readAllUsers,
  readUserById,
  createUser,
  readUserByNameAndPassword,
} = require("../controllers/user.controller");

userRouter.get("/", readAllUsers);
userRouter.post("/", createUser);
userRouter.get("/login", readUserByNameAndPassword);

module.exports = userRouter;
