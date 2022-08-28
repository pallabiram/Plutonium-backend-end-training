const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        required: true,
        ref: "newAuthor"
    },
    price: Number,
    rating: Number,
    publisher: {
        type: ObjectId,
        required: true,
        ref: "newPublisher"
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
},
{timestamps: true})

module.exports = mongoose.model('newBook', newBookSchema)