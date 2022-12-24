const { default: mongoose } = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema({
   userId :{
    type : objectId,
    user : "NewUser"
   },
   productId :{
    type : objectId,
    product : "NewProduct"
   },
   amount :Number,
   isFreeAppUser: Boolean, 
	date: String
})
//module.exports = mongoose.model("order",OrderSchema);