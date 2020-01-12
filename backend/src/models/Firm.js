const mongoose = require('mongoose');

const FirmSchema = new mongoose.Schema({
    nameFirm: String,
    addressFirm: String,
    companyOwner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
});

module.exports = mongoose.model('Firm', FirmSchema);
