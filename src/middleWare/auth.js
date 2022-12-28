// Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
// - Add this middleware at route level in the routes where applicable.//

const bodyParser = require("body-parser")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.myMiddle = async function(req,res,next){

    token = req.headers["x-auth-token"]
    if(!token) return res.status(404).send({status : true, msg : "Token not found"})
     req.id =token
    next()
}

exports.myMiddle2 = async function(req,res,next){
   try{
      //let msg = req.body.data
      let tokenVerify = jwt.verify(token,"I-am-trainee-at-FunctionUp")
      if(!tokenVerify)res.status(403).send({status : false})
      let userToBeModified = req.params.userId
 
     let userLoggedIn = tokenVerify.userId
 
      if(userToBeModified !=userLoggedIn)
 
      return res.status(403).send({msg:"invaild token or User Id "})
 
      next()
   }catch(err){
      res.status(500).send(err.message)
   }
     
}

