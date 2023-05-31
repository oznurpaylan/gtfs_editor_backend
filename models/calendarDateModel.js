var mongoose = require('mongoose')

var calendarDateSchema = new mongoose.Schema({
    service_id: {
        type: String,
    },
    date: {
        type: String,
    },
    exception_type: {
        type: String,
    },
    session_id: {
        type: String,
    }
})

var calendarDate = mongoose.model('calendarDate', calendarDateSchema)
module.exports = { calendarDate }