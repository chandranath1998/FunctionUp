const NewUser = require("../models/newUserModel");
const ProDuct = require("../models/productModel");

let midd1 = async function(req,res,next){
    let data = req.headers
    //console.log(data)
    if(data["isfreeappuser"]){
      next()
    }else{ return res.send({msg: "header is mandatory"})}
    
}

/**let midd2 = async function(req,res,next){
    let data = req.body
    let UsrId = data.userId
    let ProId = data.productId
    //console.log(data)
    let checkUser = await NewUser.findById( UsrId)
    let checkPro = await  ProDuct.findById(ProId)
    if(!checkUser){
        
        return res.send({msg : "Please use valid UserId Or Product Id"})
        
    }
    next();

    //console.log(checkUser)
    //res.send({msg : checkUser})
}   *///


module.exports.midd1 = midd1
//module.exports.midd2 = midd2