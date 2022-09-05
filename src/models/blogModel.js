const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        reuire: true
    },
    authorId: {
        type: ObjectId,
        ref: 'author37'
    },
    tags:[{String}],
    category: {
        type: String, require: true
    },
    subcategory: [{String}],
    createdAt: {
            type: String,
        },
    updatedAt: Date,
    deletedAt: Date,
    isDeleted: { type: Boolean, default: false },
    publishedAt: { type: Date },
    isPublished: { type: Boolean, default: false }
    
},{timestamps:true})
module.exports=mongoose.model('blog',blogSchema)