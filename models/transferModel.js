var mongoose = require('mongoose')

var transferSchema = new mongoose.Schema({
    from_stop_id: {
        type: String,
    },
    to_stop_id: {
        type: String,
    },
    transfer_type: {
        type: String,
    },
    min_transfer_time: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var transfer = mongoose.model('transfer', transferSchema)
module.exports = { transfer }