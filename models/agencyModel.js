var mongoose = require('mongoose')

var agencySchema = new mongoose.Schema({
    agency_id: {
        type: String,
    },
    agency_name: {
        type: String,
    },
    agency_url: {
        type: String,
    },
    agency_timezone: {
        type: String,
    },
    agency_lang: {
        type: String,
    },
    agency_phone: {
        type: String,
    },
    agency_fare_url: {
        type: String,
    },
    agency_email: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var agency = mongoose.model('agency', agencySchema)
module.exports = { agency }