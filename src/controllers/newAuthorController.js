const newAuthorModel = require('../models/newAuthorModel')

const createNewAuthor = async function(req, res){
    let bodyData = req.body
    let createData = await newAuthorModel.create(bodyData)
    res.send({dataCreated: createData, status: true})
}

const getAllAuthor = async function(req, res){
    let getData = await newAuthorModel.find()
    res.send({data: getData, status: true})
}

module.exports.createNewAuthor = createNewAuthor
module.exports.getAllAuthor = getAllAuthor