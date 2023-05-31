var mongoose = require('mongoose')

var tripSchrema = new mongoose.Schema({
    trip_id: {
        type: String,
    },
    service_id: {
        type: String,
    },
    route_id: {
        type: String,
    },
    trip_headsign: {
        type: String,
    },
    trip_short_name: {
        type: String,
    },
    direction_id: {
        type: String,
    },
    block_id: {
        type: String,
    },
    shape_id: {
        type: String,
    },
    wheelchair_accessible: {
        type: String,
    },
    bikes_allowed: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var trip = mongoose.model('trip', tripSchrema)
module.exports = { trip }