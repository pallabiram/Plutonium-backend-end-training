const blogModel = require('../models/blogModel')
const authorModel = require('../models/authorModel')
const moment = require('moment')


const validation = function (data) {
    if (data == undefined || data == null) {
        return false
    }
    if (typeof (data) == "string" && data.trim() == 0) {
        return false
    }
    return true
}

let createBlogs = async function (req, res) {
    try {

        let data = req.body
        if (!validation(data.title)) res.status(400).send("tittle is mandatory")
        if (!validation(data.body)) res.status(400).send("data is mandatory in body")
        if (!validation(data.category)) res.status(400).send("category is mandatory")
        
        let Id = data.authorId
        if (!Id) return res.status(400).send({ msg: "Author ID is not given" })
        let authorId = await authorModel.findById(Id)
        if (!authorId) return res.status(404).send({ msg: "author not found" })
        if (data.isPublished == true) {
            data.publishedAt = Date.now()
        }
        let saveData = await blogModel.create(data)

        return res.status(201).send({ msg: saveData })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

const getBlogs= async function(req,res){
   try {
    let data=req.query
    let allBlogs= await blogModel.find({isDeleted:false,isPublished:true,...data})
    
    
    res.status(200).send({status:true, allBlogs})
    
}
catch(err){
    res.status(404).send(err.message)
}
}



module.exports.getBlogs=getBlogs








module.exports.createBlogs = createBlogs