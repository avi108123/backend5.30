const express = require("express");
const { getAllProducts, createProduct, deleteProduct, updateProduct, getSingleProduct } = require("../controllers/productControllers");
const checkLogin = require("../middlewares/checkLoginMIddleware");
const Router = express.Router();


Router.get("/",getAllProducts)
Router.get("/getproduct",getSingleProduct)


Router.post("/create",checkLogin,createProduct)
Router.put("/update",checkLogin,updateProduct)
Router.delete("/delete",checkLogin,deleteProduct)


module.exports = Router;