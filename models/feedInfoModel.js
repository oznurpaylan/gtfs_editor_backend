var mongoose = require('mongoose')

var feedInfoSchema = new mongoose.Schema({
    feed_publisher_name: {
        type: String,
    },
    feed_publisher_url: {
        type: String,
    },
    feed_lang: {
        type: String,
    },
    default_lang: {
        type: String,
    },
    feed_start_date: {
        type: String,
    },
    feed_end_date: {
        type: String,
    },
    feed_version: {
        type: String,
    },
    feed_contact_email: {
        type: String,
    },
    feed_contact_url: {
        type: String,
    },
    session_id: {
        type: String,
    },

})

var feedInfo = mongoose.model('feedInfo', feedInfoSchema)
module.exports = { feedInfo }