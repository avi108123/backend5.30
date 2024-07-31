const Products = require("../model/productModel");
const jwt = require("jsonwebtoken");
const Users = require("../model/userModel");

async function getAllProducts(req, res) {
  let data = await Products.find();
  res.status(200).json({
    success:true,
    data:data,
  })
}

async function getSingleProduct(req,res){
    let id = req.headers.id;
    let product =await Products.findById(id);
    res.status(200).json({
        success:true,
        data:product,
      })
}


async function createProduct(req, res) {
  try {
    let data = req.body;
    let newProduct = await Products.create(data);
    res.status(201).json({
        success:true,
        data:newProduct,
      })
  } catch (error) {
    res.status(500).json({
        success:false,
        errmsg:error.message
      })
  }
}




async function deleteProduct(req, res) {
  try {
    let id = req.headers.id;

    let product = await Products.findByIdAndDelete(id);

    if (!product) {
      return  res.status(400).json({
        success:false,
        errmsg:"no product found"
      });
    }
    res.status(200).json({
        success:true,
        msg:"product deleted successfully"
      })
  } catch (error) {
    res.json({
        success:false,
        errmsg:error.message
      })
  }
}




async function updateProduct(req, res) {
  try {
    let id = req.headers.id;
    let data = req.body;

    let productdata = await Products.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
        success:true,
        data:productdata,
      })
  } catch (error) {
    res.status(500).json({
        success:false,
        errmsg:error.message
      })
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
};
