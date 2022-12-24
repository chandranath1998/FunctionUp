const orderModel = require("../models/newUserModel")
const userModel = require("../models/newUserModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data= req.body
    let isFreeAppUser=req.isFreeAppUser
    let usrId=data.userId
    let proId=data.productId
    let amount=data.amount 
    if(usrId){
        if(!proId){ res.send({msg: "product id is required"})}
    }else  res.send({msg: "user id is required"})
//-------------------------------------
let user= await userModel.findById(usrId)
    
     if(!user) {   return res.send({msg: "invalid user id"})}

let product= await productModel.findById(proId)
    
     if(!product) {   return res.send({msg: "invalid product id"})}

     let balance =user.balance
     let price = product.price
     let cost=amount ;

     if(isFreeAppUser){
        let update= await orderModel.findByIdAndUpdate(usrId,{$set:{amount:0}},{new:true})
        //let savedData= await orderModel.create(data)
         res.send({user:update})}
     

     if(balance>cost){
        let update= await userModel.findByIdAndUpdate(usrId,{$set:{balance:(balance-cost)}},{new:true})
        //let amount= await orderModel.findByIdAndUpdate(usrId,{$set:{amount:price}},{new:true})
         let savedData= await orderModel.create(data)
         res.send({msg: savedData, user:update })}
        
         else{
            return res.send({msg: "insufficent balance"})}
}
  
module.exports.createOrder = createOrder