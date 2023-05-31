var mongoose = require('mongoose')

var fareProductsSchema = new mongoose.Schema({
    fare_product_id: {
        type: String,
    },
    fare_product_name: {
        type: String,
    },
    fare_media_id: {
        type: String,
    },
    amount: {
        type: String,
    },
    currency: {
        type: String,
    },
    session_id: {
        type: String,
    },
})

var fareProducts = mongoose.model('fareProducts', fareProductsSchema)
module.exports = { fareProducts }
