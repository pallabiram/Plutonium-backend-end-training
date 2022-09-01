const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const createOrder = async function (req, res) {
    let bodyData = req.body
    let isFreeAppUserValue = req.isFreeAppUser

    if (bodyData.userId == false && bodyData.productId == false) {
        res.send("Please Enter Both User ID and Product ID")
    }
    else if (bodyData.userId == false) {
        res.send("Error: Please Enter User ID")
    }
    else if (bodyData.productId == false) {
        res.send("Error: Please Enter Product ID")
    }
    else {
        let userId = await userModel.find({ _id: { $in: bodyData.userId } })
        let productId = await productModel.find({ _id: { $in: bodyData.productId } })
        if (userId.length <= 0) {
            res.send("User ID not Found.....please Enter valid User ID")
        }
        else if (productId.length <= 0) {
            res.send("Product ID not Found.....please Enter valid Product ID")
        }
        else {
            if (isFreeAppUserValue) {
                req.body["amount"] = 0
                req.body["isFreeAppUser"] = true
                let createData = await orderModel.create(bodyData)
                res.send({ data: createData, status: true })

                // let orderId = await orderModel.findOne().sort({createdAt: -1}).select({_id: 1})  
                // let updatedData = await orderModel.findByIdAndUpdate(
                //     orderId,
                // {$set: {isFreeAppUser: true, amount: 0}},
                // {new: true}
                // )
            }

            else {
                let userId = req.body.userId
                let productId = req.body.productId
                let userBalance = await userModel.findOne({_id: userId}).select({balance: 1, _id: 0})
                let productPrice = await productModel.findOne({_id: productId}).select({price: 1, _id: 0})
                if(userBalance.balance < productPrice.price)
                {
                    res.send({msg: "User doesn't have enough balance", status: false})
                }
                else{
                    let postBalance = userBalance['balance'] - productPrice['price']
                    let userUpdatedBalance = await userModel.updateOne(
                        {_id: userId},
                        {$set: {balance: postBalance}}
                    )
                    req.body['amount'] = productPrice.price
                    req.body['isFreeAppUser'] = false
                    let createData = await orderModel.create(bodyData)
                    res.send({ data: createData, status: true })
                }
            }

        }
    }

}



const getOrder = async function (req, res) {
    let get = await orderModel.find()
    res.send({ data: get, status: true })
}

module.exports.createOrder = createOrder
module.exports.getOrder = getOrder