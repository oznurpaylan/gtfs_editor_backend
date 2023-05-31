var mongoose = require('mongoose')

var fareMediaSchema = new mongoose.Schema({
    fare_media_id: {
        type: String,
    },
    fare_media_name: {
        type: String,
    },
    fare_media_type: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var fareMedia = mongoose.model('fareMedia', fareMediaSchema)
module.exports = { fareMedia }
