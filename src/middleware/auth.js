const jwt=require('jsonwebtoken')
const authentication= function(req,res,next){

    next()
}


const authorisation=function(req,res,next){
    let token= req.headers["X-API-KEY"]
    if (!token) req.headers["x-api-key"]

    if (!token) return res.status(404).send({status:false , msg : "token is not found "})

    let verify= jwt.verify(token , "group37 project")
    if (!verify) return res.status(402).send({status: false , msg : "token is not valid "})

    let AuthorId = req.body.AuthorId
    let tokenID = verify._id

    if (AuthorId == tokenID){
        next()
    }
    else{
        return res.status(401).send({status: false , msg : "you are not authorise person "}) 
    }



   
}

module.exports.authorisation=authorisation