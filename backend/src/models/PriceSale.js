const mongoose = require('mongoose');

const PriceSaleSchema = new mongoose.Schema({
    price: Number,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OwnerCompany'
    }
});

module.exports = mongoose.model('PriceSale', PriceSaleSchema);
