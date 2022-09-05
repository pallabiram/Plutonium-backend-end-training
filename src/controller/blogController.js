const blogModel = require('../models/blogModel')
const authorModel =require('../models/authorModel')

let createBlogs = async function(req,res){
    try  {

    let data = req.body
    let Id = data.authorId
    if(!Id) res.status(400).send({msg : "Author ID is not given"})
    let authorId= await authorModel.findOne({authorId : Id})
    if(!authorId) res.status(404).send({msg: "author not found"})
    
    let saveData = await blogModel.create(data)
    res.status(201).send({msg : saveData})
    }
    catch(err){
        res.status(500).send({msg : err.message})
    }
}









module.exports.createBlogs=createBlogs