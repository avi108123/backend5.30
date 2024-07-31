const Users = require("../model/userModel");
const jwt = require("jsonwebtoken")


async function checkLogin(req,res,next){
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


   next();
        
    } catch (error) {
        res.send(error);
    }
}

module.exports = checkLogin;