const express = require("express");

const Router = express.Router();


Router.get("/",(req,res)=>{
    res.send("all products");
})

Router.post("/create",(req,res)=>{
    res.send("product created successfully")
})
Router.put("/update",(req,res)=>{
    res.send("product updated successfully")
})


module.exports = Router;