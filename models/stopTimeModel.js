var mongoose = require('mongoose')

var stoptimeSchema = new mongoose.Schema({
    trip_id: {
        type: String,
        required: true
    },
    stop_id: {
        type: String,
        required: true
    },
    stop_sequence: {
        type: String,
        required: true
    },
    arrival_time: {
        type: String,
    },
    departure_time: {
        type: String,
    },
    stop_headsign: {
        type: String,
    },
    pickup_type: {
        type: String,
    },
    drop_off_type: {
        type: String,
    },
    continuous_pickup: {
        type: String,
    },
    continuous_drop_off: {
        type: String,
    },
    shape_dist_traveled: {
        type: String,
    },
    timepoint: {
        type: String,
    },
    session_id: {
        type: String,
    },

})

var stoptime = mongoose.model('stoptime', stoptimeSchema)
module.exports = { stoptime }