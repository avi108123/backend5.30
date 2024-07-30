const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:"",
    },
    price:{
        type:Number,
        required:true, 
    },
    image:{
        type:String,
    }
},{
    timestamps:true,
})


let Products = mongoose.model("products",productSchema)

module.exports = Products;