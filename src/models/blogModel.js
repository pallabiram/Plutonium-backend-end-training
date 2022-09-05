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
        ref: 'author'
    },
    tags: { type: [] },
    category: {
        type: string, require: true
    },
    subcategory: {
        type: []
    },
    createdAt: {
            type: string,
        },
    updatedAt:String,
    deletedAt: String ,
    isDeleted: { type: Boolean, default: false },
    publishedAt: { type: String },
    isPublished: { type: Boolean, default: false }
    
},{timestamps:true})
module.exports=mongoose.model('blog',blogSchema)