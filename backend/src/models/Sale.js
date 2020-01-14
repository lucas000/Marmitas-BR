const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    price: Number,
    date: Date,
    quantity: Number,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    },
    ownerCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OwnerCompany',
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
    price: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PriceSale',
    },
    firm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm',
    },
});

module.exports = mongoose.model('Sale', SaleSchema);
