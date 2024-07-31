const Users = require("../model/userModel");
const bcrypt = require("bcryptjs")
const{validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
async function getAllUsers(req,res){
        let data = await Users.find();
        res.send(data);
      
}



async function registerUser(req,res){
    try {

      let result = validationResult(req);
     
      let errors = result.errors;
      if(errors.length!=0){
        
      let err = errors.map((er)=>er.msg)

        return res.send(err[0]);
      }


        let data = req.body;
         
        let existingUser = await Users.findOne({email:data.email});
    
        if(existingUser){
         return res.send("you are already registered please login")
        }
    
         let hashpassword =  bcrypt.hashSync(data.password,10);

      
        let newUser = await Users.create({...data,password:hashpassword});
        res.send(newUser);
      } catch (error) {
        res.send(error);
      }
}


async function loginUser(req,res){
    let data = req.body;
    let existingUser = await Users.findOne({email:data.email})
  if(!existingUser){
   return res.send("no user found please registered first")
  }


  let result = bcrypt.compareSync(data.password,existingUser.password);

  
  if(!result){
    return res.send("wrong password")
  }


  let token = jwt.sign({userId:existingUser._id},"thisisyoursecretkey",{expiresIn:"30d"})


  res.send({existingUser,token});

}


module.exports = {getAllUsers,registerUser,loginUser}












