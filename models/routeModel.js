var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var routeSchema = new Schema({
    route_id: {
        type: String,
    },
    agency_id: {
        type: String,
    },
    route_type: {
        type: String,
    },
    route_short_name: {
        type: String,
    },
    route_long_name: {
        type: String,
    },
    route_desc: {
        type: String,
    },
    route_url: {
        type: String,
    },
    route_color: {
        type: String,
    },
    route_text_color: {
        type: String,
    },
    route_sort_order: {
        type: String,
    },
    continuous_drop_off: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var route = mongoose.model('route', routeSchema)
module.exports = { route }