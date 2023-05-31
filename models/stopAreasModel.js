var mongoose = require('mongoose')

var stopAreaSchema = new mongoose.Schema({
    area_id: {
        type: String,
    },
    stop_id: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var stopArea = mongoose.model('stopArea', stopAreaSchema)
module.exports = { stopArea }