var mongoose = require('mongoose')

var fareTransferRulesSchema = new mongoose.Schema({
    from_leg_group_id: {
        type: String,
    },
    to_leg_group_id: {
        type: String,
    },
    transfer_count: {
        type: String,
    },
    duration_limit: {
        type: String,
    },
    duration_limit_type: {
        type: String,
    },
    fare_transfer_type: {
        type: String,
    },
    fare_product_id: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var fareTransferRules = mongoose.model('fareTransferRules', fareTransferRulesSchema)
module.exports = { fareTransferRules }