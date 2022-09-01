const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "userDatabase"
    },
    productId: {
        type: ObjectId,
        ref: "productData"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
},
{timestamps: true}
)

module.exports = mongoose.model("orderData", orderSchema)