var mongoose = require('mongoose')

var attributionsSchema = new mongoose.Schema({
    attribution_id: {
        type: String
    },
    agency_id: {
        type: String
    },
    route_id: {
        type: String
    },
    trip_id: {
        type: String
    },
    organization_name: {
        type: String,
    },
    is_producer: {
        type: String
    },
    is_operator: {
        type: String
    },
    is_authority: {
        type: String
    },
    attribution_url: {
        type: String
    },
    attribution_email: {
        type: String
    },
    attribution_phone: {
        type: String
    },

    session_id: {
        type: String,
    }
})

var attribution = mongoose.model('attribution', attributionsSchema)
module.exports = { attribution }