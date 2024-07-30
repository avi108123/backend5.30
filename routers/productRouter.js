const express = require("express");
const { getAllProducts, createProduct, deleteProduct, updateProduct } = require("../controllers/productControllers");

const Router = express.Router();


Router.get("/",getAllProducts)





Router.post("/create",createProduct)
Router.put("/update",updateProduct)
Router.delete("/delete",deleteProduct)


module.exports = Router;