const newAuthorModel = require('../models/newAuthorModel')
const newBookModel = require('../models/newBookModel')
const newPublisherModel = require('../models/newPublisherModel')

const createNewBook = async function (req, res) {
    let bodyData = req.body
    if (bodyData.author == false && bodyData.publisher == false) {
        res.send("Please Enter Both Author ID and Publisher ID")
    }
    else if (bodyData.author == false) {
        res.send("Error: Please Enter Author ID")
    }
    else if(bodyData.publisher == false){
        res.send("Error: Please Enter Publisher ID")
    }
    else {
        let authorId = await newAuthorModel.find({ _id: { $in: bodyData.author } })
        let publisherId = await newPublisherModel.find({ _id: { $in: bodyData.publisher } })
        if (authorId.length <= 0) {
            res.send("Author ID not Found.....please Enter valid Author ID")
        }
        else if (publisherId.length <= 0) {
            res.send("Publisher ID not Found.....please Enter valid Publisher ID")
        }
        else {
            let createData = await newBookModel.create(bodyData)
            res.send({ dataCreated: createData, status: true })
        }
    }
}

const getAllBook = async function (req, res) {
    let getData = await newBookModel.find()
    res.send({ data: getData, status: true })
}

const getAllBookWithAuthorAndPublisher = async function (req, res) {
    let getData = await newBookModel.find().populate(['author', 'publisher'])
    //let arr = getData.map(x => x.publisher.name)
    res.send({ data: getData, status: true })
}

const updateBooks = async function(req, res){
    let updateIsHardCover = await newBookModel.updateMany(
        {[publisher.name]: "Penguin"},
        {$set: {isHardCover: true}},
        {new: true}
    ).populate(['author', 'publisher'])
    res.send({data: updateIsHardCover, status: true})
}

module.exports.createNewBook = createNewBook
module.exports.getAllBook = getAllBook
module.exports.getAllBookWithAuthorAndPublisher = getAllBookWithAuthorAndPublisher
module.exports.updateBooks = updateBooks