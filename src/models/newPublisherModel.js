const mongoose = require('mongoose')

const newPublisherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    headQuarter: String,
},
{timestamps: true})

module.exports = mongoose.model('newPublisher', newPublisherSchema)