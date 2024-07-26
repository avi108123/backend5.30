const express = require("express");
const mongoose = require("mongoose");
const Users = require("./model/userModel");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const server = express();

server.use(express.json());


server.use("/user", userRouter);
server.use("/product", productRouter);


server.get("/", (req, res) => {
  res.send("server is up");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/backend")
  .then(() => console.log("connected to dbs"))
  .catch((err) => console.log(err));

server.listen(8000, () => {
  console.log("server is listening on port 8000");
});







