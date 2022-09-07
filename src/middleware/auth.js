const jwt=require('jsonwebtoken')
const blogModel = require('../models/blogModel')


const authentication= function(req,res,next){
    let token= req.headers["X-API-KEY"]
    if (!token) token = req.headers["x-api-key"]

    if (!token) return res.status(404).send({status:false , msg : "token is not found "})

    let verify= jwt.verify(token , "group37 project")
    if (!verify) return res.status(402).send({status: false , msg : "token is not valid "})
    
    req.final= verify.userid
    next()
}



const authorisation= async function(req,res,next){

    let blogId = req.params.blogId
    let validblog =  await blogModel.findById(blogId)
    if (!validblog) return res.status(404).send({status: true , msg :"No blog is present with this blogId"})

    let authorId = validblog.authorId
    let decodedToken=req.final

    if (authorId != decodedToken){
        return res.status(401).send({status: false , msg : "you are not authorise person "}) 
    }
    next()
   
}
module.exports.authentication=authentication

module.exports.authorisation=authorisation
