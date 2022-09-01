const productModel = require('../models/productModel')

const createProduct = async function(req, res){
    let data = req.body
    let savedData = await productModel.create(data)
    res.send({data: savedData, status: true})
}

const getProduct = async function(req, res){
    let get = await productModel.find()
    res.send({data: get, status: true})
}

module.exports.createProduct = createProduct
module.exports.getProduct = getProduct