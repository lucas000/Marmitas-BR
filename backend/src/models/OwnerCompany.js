const mongoose = require('mongoose');

const OwnerCompanySchema = new mongoose.Schema({
    name: String,
    email: String,
    cpf: String,
    password: String,
});

module.exports = mongoose.model('OwnerCompany', OwnerCompanySchema);