const Products = require("../model/productModel");
const jwt = require("jsonwebtoken");
const Users = require("../model/userModel");

async function getAllProducts(req,res){
    let data = await Products.find();
    res.send(data);
}



async function createProduct(req,res){
   try {

     
    let header = req.headers.authorization;
     
    if(!header){
        return res.send("no header provided");
    }

    let token = header.split(" ")[1];

    if(!token){
        return res.send("no token provided")
    }
   
      let {userId} =   jwt.verify(token,"thisisyoursecretkey")
   let user = await Users.findById(userId);
   if(!user){
    return res.send("you are not allowed to access this ")
   }
    let data = req.body;
    let newProduct = await Products.create(data);
    res.send(newProduct)
    
   } catch (error) {
    res.send(error)
   }
}


async function deleteProduct(req,res){
    try {
   
        let header = req.headers.authorization;
     
        if(!header){
            return res.send("no header provided");
        }
    
        let token = header.split(" ")[1];
    
        if(!token){
            return res.send("no token provided")
        }
       
          let {userId} =   jwt.verify(token,"thisisyoursecretkey")
       let user = await Users.findById(userId);
       if(!user){
        return res.send("you are not allowed to access this ")
       }


       let id = req.headers.id;
       
       let product = await Products.findByIdAndDelete(id);
       
       if(!product){
        return res.send("no product found ")
       }
       res.send("product deleted successfully")

        
    } catch (error) {
        res.send(error)
    }
}

async function updateProduct(req,res){
    try {
        let header = req.headers.authorization;
     
        if(!header){
            return res.send("no header provided");
        }
    
        let token = header.split(" ")[1];
    
        if(!token){
            return res.send("no token provided")
        }
       
          let {userId} =   jwt.verify(token,"thisisyoursecretkey")
       let user = await Users.findById(userId);
       if(!user){
        return res.send("you are not allowed to access this ")
       }
       
       let id = req.headers.id;
       let data = req.body;


       let productdata = await Products.findByIdAndUpdate(id,data,{new:true});

       res.send(productdata)

        
    } catch (error) {
        res.send(error)
    }
}





module.exports ={getAllProducts,createProduct,deleteProduct,updateProduct}