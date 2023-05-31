var mongoose = require('mongoose')

var pathwaysSchema = new mongoose.Schema({
    pathway_id: {
        type: String,
    },
    from_stop_id: {
        type: String,
    },
    to_stop_id: {
        type: String,
    },
    pathway_mode: {
        type: String,
    },
    is_bidirectional: {
        type: String,
    },
    length: {
        type: String,
    },
    traversal_time: {
        type: String,
    },
    stair_count: {
        type: String,
    },
    max_slope: {
        type: String,
    },
    min_width: {
        type: String,
    },
    signposted_as: {
        type: String,
    },
    reversed_signposted_as: {
        type: String,
    },
    session_id: {
        type: String,
    },

})

var pathway = mongoose.model('pathway', pathwaysSchema)
module.exports = { pathway }