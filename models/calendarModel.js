var mongoose = require('mongoose')

var calendarSchema = new mongoose.Schema({
    service_id: {
        type: String,
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    monday: {
        type: String,
    },
    tuesday: {
        type: String,
    },
    wednesday: {
        type: String,
    },
    thursday: {
        type: String,
    },
    friday: {
        type: String,
    },
    saturday: {
        type: String,
    },
    sunday: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var calendar = mongoose.model('calendar', calendarSchema)
module.exports = { calendar }