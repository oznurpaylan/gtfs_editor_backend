var mongoose = require('mongoose')

var fareRulesSchema = new mongoose.Schema({
    fare_id: {
        type: String,
    },
    route_id: {
        type: String,
    },
    origin_id: {
        type: String,
    },
    destination_id: {
        type: String,
    },
    contains_id: {
        type: String,
    },
    session_id: {
        type: String,
    },

})

var fareRule = mongoose.model('fareRule', fareRulesSchema)
module.exports = { fareRule }