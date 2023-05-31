var mongoose = require('mongoose')

var frequenciesSchema = new mongoose.Schema({
    trip_id: {
        type: String,
    },
    start_time: {
        type: String,
    },
    end_time: {
        type: String,
    },
    headway_secs: {
        type: String,
    },
    exact_times: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var frequencie = mongoose.model('frequencie', frequenciesSchema)
module.exports = { frequencie }