const ProductModel = require("../models/productModel");

const newProduct = async function(req,res){
    let data = req.body
    let savedData = await ProductModel.create(data);
    res.send({msg : savedData})
}

module.exports.newProduct = newProduct