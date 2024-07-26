const express = require("express");
const Users = require("../model/userModel");
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userControllers");


const validator = require("../middlewares/validationMiddleware");

const Router = express.Router();

//localhost:8000/user/

Router.get("/", getAllUsers);

Router.post("/register",validator, registerUser);

Router.post("/login", loginUser);

module.exports = Router;
