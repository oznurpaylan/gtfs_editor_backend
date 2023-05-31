var mongoose = require('mongoose')

var stopSchema = new mongoose.Schema({
    stop_id: {
        type: String,
    },
    stop_name: {
        type: String,
    },
    stop_lat: {
        type: String,
    },
    stop_lon: {
        type: String,
    },
    stop_code: {
        type: String,
    },
    stop_desc: {
        type: String,
    },
    zone_id: {
        type: String,
    },
    stop_url: {
        type: String,
    },
    location_type: {
        type: String,
    },
    parent_station: {
        type: String,
    },
    stop_timezone: {
        type: String,
    },
    wheelchair_boarding: {
        type: String,
    },
    level_id: {
        type: String,
    },
    platform_code: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var stop = mongoose.model('stop', stopSchema)
module.exports = { stop }