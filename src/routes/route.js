const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares");
const productController = require('../controllers/productController');
const NewUserController = require('../controllers/newUserController');
const MyMidd = require('../middlewares/myMiddWare');
const OrderController = require("../controllers/orderController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

router.post("/newProduct", productController.newProduct)
router.post("/createUser" , MyMidd.midd1, NewUserController.createUser)
router.post("/purchaseOrder",MyMidd.midd1, OrderController.createOrder)


module.exports = router;