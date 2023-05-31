var mongoose = require('mongoose')

var fareAttributesSchema = new mongoose.Schema({
    fare_id: {
        type: String,
    },
    price: {
        type: String,
    },
    currency_type: {
        type: String,
    },
    payment_method: {
        type: String,
    },
    transfers: {
        type: String,
    },
    agency_id: {
        type: String,
    },
    transfer_duration: {
        type: String,
    },
    session_id: {
        type: String
    }
})

var fareAttributes = mongoose.model('fareAttributes', fareAttributesSchema)
module.exports = { fareAttributes }