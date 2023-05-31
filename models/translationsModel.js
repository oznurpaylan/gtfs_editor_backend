var mongoose = require('mongoose')

var translationsSchema = new mongoose.Schema({
    table_name: {
        type: String,
    },
    field_name: {
        type: String,
    },
    language: {
        type: String,
    },
    translation: {
        type: String,
    },
    record_id: {
        type: String,
    },
    record_sub_id: {
        type: String,
    },
    field_value: {
        type: String,
    },
    session_id: {
        type: String,
    },

})

var translations = mongoose.model('translations', translationsSchema)
module.exports = { translations }