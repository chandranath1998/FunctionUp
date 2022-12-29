const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    productId: {
        type: ObjectId,
        ref: "chandrasProduct"
    }, 
    userId: {
        type: ObjectId,
        ref: "chandrasUsers"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
}, { timestamps: true });


module.exports = mongoose.model('chandrasOrder', orderSchema)
