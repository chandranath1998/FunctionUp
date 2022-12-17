const UserModel= require("../models/userModel")
//const bookModel = require('../models/bookModel')

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

//const bookModel = require('../models/bookModel')

/*const createNewBook = async function(req,res){
    let bookData = req.body
    let savedBookData = await bookModel.create(bookData)
    res.send({msg : savedBookData})*/
//}

//module.exports.createNewBook = createNewBook

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData