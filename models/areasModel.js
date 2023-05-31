var mongoose = require('mongoose')

var AreasSchema = new mongoose.Schema({
    area_id: {
        type: String,
    },
    area_name: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var area = mongoose.model('area', AreasSchema)
module.exports = { area }
