var mongoose = require('mongoose')

var fareLegRulesSchema = new mongoose.Schema({
    fare_product_id: {
        type: String,
    },
    leg_group_id: {
        type: String,
    },
    network_id: {
        type: String,
    },
    from_area_id: {
        type: String,   
    },
    to_area_id: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var fareLegRules = mongoose.model('fareLegRules', fareLegRulesSchema)
module.exports = { fareLegRules }
