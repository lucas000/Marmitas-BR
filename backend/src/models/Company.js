const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: String,
    ownerCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OwnerCompany'
    },
});

module.exports = mongoose.model('Company', CompanySchema);
