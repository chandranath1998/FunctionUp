const bookModel = require('../models/bookModel')

const createNewBook = async function(req,res){
    let bookData = req.body
    let savedBookData = await bookModel.create(bookData)
    res.send({msg : savedBookData})
}

const getAllBooks = async function(req,res){
    let getBooks = await bookModel.find()
    res.send({msg : getBooks})
}

module.exports.allBooks = getAllBooks
module.exports.createNewBook = createNewBook 