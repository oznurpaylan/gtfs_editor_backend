var mongoose = require('mongoose')

var levelsSchema = new mongoose.Schema({
    level_id: {
        type: String,
    },
    level_index: {
        type: String,
    },
    level_name: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var level = mongoose.model('level', levelsSchema)
module.exports = { level }