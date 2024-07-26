const Users = require("../model/userModel");

const{validationResult} = require("express-validator")

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
    
        let newUser = await Users.create(data);
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


  if(data.password!=existingUser.password){
    return res.send("wrong password")
  }

  
  res.send(existingUser);

}


module.exports = {getAllUsers,registerUser,loginUser}





