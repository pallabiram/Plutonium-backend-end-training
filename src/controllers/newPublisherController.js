const newPublisherModel = require('../models/newPublisherModel')

const createNewPublisher = async function(req, res){
    let bodyData = req.body
    let createData = await newPublisherModel.create(bodyData)
    res.send({dataCreated: createData, status: true})
}

const getAllPublisher = async function(req, res){
    let getData = await newPublisherModel.find()
    res.send({data: getData, status: true})
}

module.exports.createNewPublisher = createNewPublisher
module.exports.getAllPublisher = getAllPublisher