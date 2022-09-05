const authorModel = require('../models/authorModel')


const createAuthor = async function (req, res) {
    try {
        let data = req.body

        if (!data.fname) return res.status(400).send({msg : " Full name is required  "})
        if (!data.lname) return res.status(400).send({msg : " last name is required  "})
        if (!data.title) return res.status(400).send({msg : " title name is required  "})
        if (!data.email) return res.status(400).send({msg : " email ID not given "})
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))){
            return res.send({msg : "invalid email "})
        }
        if (!data.password) return res.status(400).send({msg : " Password not given "})
        if (!(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(data.password))){
            return res.send({msg : "password invalid,password should contain atleast one number and one special character"})
        }
        let savedData = await authorModel.create(data)
        res.status(201).send({ msg: savedData })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
module.exports.createAuthor= createAuthor