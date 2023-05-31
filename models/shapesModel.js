var mongoose = require('mongoose')

var shapesSchema = new mongoose.Schema({
    shape_id: {
        type: String,
    },
    shape_pt_lat: {
        type: String,
    },
    shape_pt_lon: {
        type: String,
    },
    shape_dist_traveled: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var shape = mongoose.model('shape', shapesSchema)
module.exports = { shape }