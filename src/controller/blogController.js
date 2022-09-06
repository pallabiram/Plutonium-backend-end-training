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


const getBlogs = async function (req, res) {
    try {
        let data = req.query
        let allBlogs = await blogModel.find({ isDeleted: false, isPublished: true, ...data })


        res.status(200).send({ status: true, allBlogs })

    }
    catch (err) {
        res.status(404).send(err.message)
    }
}

const deleteBlogs = async function (req, res) {
    try {
        let data = req.params.blogId
        if (!data) return res.send("Blog Id is not given")

        let blogId = await blogModel.findById(data)
        if (!blogId) return res.status(404).send({ msg: "Blog id not found" })
        if (blogId.isDeleted == true) {
            res.status(200).send({ msg: "Blog is already deleted" })
        }

        else {
            blogId.isDeleted = true
            blogId.deletedAt = Date.now()
            res.status(200).send({ msg: blogId })
        }
    }

    catch (err) {
        res.status(500).send(err.message)
    }


}
const updatedBlogs = async function (req, res) {
    try {
        let data = req.params.blogId
        let updatedData = req.body
        if (updatedData.isDeleted == true) {
            return res.status(200).send("already deleted")
        }
        else {
            let saveData = await blogModel.findOneAndUpdate({ _id: data },
                {
                    $set: {
                        title: updatedData.title,
                        body: updatedData.body,
                        tags: updatedData.tags,
                        subcategory: updatedData.subcategory,
                        isPublished: true, publishedAt: Date.now()
                    }
                },
                { new: true })
            res.status(200).send({ msg: saveData })
        }
    }
    catch (err) {
        res.status(500).send({ err: err.message })
    }
}

module.exports.getBlogs = getBlogs

module.exports.createBlogs = createBlogs

module.exports.updatedBlogs = updatedBlogs

module.exports.deleteBlogs = deleteBlogs