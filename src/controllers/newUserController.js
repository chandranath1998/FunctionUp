const NewUserModel = require("../models/newUserModel");

const createUser = async function(req,res){
   let data = req.body
   let savedData = await NewUserModel.create(data)
   res.send ({msg : savedData})
}

module.exports.createUser = createUser;