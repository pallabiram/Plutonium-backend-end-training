const authorModel = require('../models/authorModel')
const jwt=require('jsonwebtoken')
const { use } = require('../route/route')
const validation = function(data){
    if(data==undefined || data == null ){
        return false
    }
    if(typeof(data)== "string" && data.trim()==0) {
        return false 
    }
    return true 
}

const validBody = function(data)
{
    if (Object.keys(data)==0) return false
    return true
}


      
const createAuthor = async function (req, res) {
    try {
        let data = req.body

        if (!validBody(data))  return res.status(400).send({msg :"body  is empty"})
        if (!validation(data.fname)) return res.status(400).send({msg : " Full name is required  "})
        if (!validation(data.lname)) return res.status(400).send({msg : " last name is required  "})
        if (!validation(data.title)) return res.status(400).send({msg : " title name is required  "})
        if (!validation(data.email)) return res.status(400).send({msg : " email ID not given "})
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))){
            return res.send({msg : "invalid email "})
        }
        if (!data.password) return res.status(400).send({msg : " Password not given "})
        if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(data.password))){
            return res.send({msg : "password invalid,password should contain atleast one number and one special character"})
        }
        let savedData = await authorModel.create(data)
        res.status(201).send({ msg: savedData })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

const login=async function(req,res){
    try{
    let username=req.body.email
    let password=req.body.password
    if (!validBody(req.body))  return res.status(400).send({msg :"body  is empty"})
    if (!validation(username)) return res.status(400).send({msg : " email ID not given "})
    if (!validation(password)) return res.status(400).send({msg : " password not given "})
    let userData=await authorModel.find({email:username,password:password})
    if(!userData){
       return res.status(404).send({status:true,msg:"incorrect credential"})
    }
    let token=jwt.sign({
        userid:userData._id.toString(),
        batch:"plutonium",
        project:"mini blogging site"
    },
    "group37 project"
    )
    res.setHeader("x-api-key",token)
    return res.status(201).send({status:true,msg:token})
}
catch(err){
   return res.status(500).send({status:false, msg:err.message})
}
}






module.exports.createAuthor= createAuthor
module.exports.login=login