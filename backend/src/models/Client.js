const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nameCliente: String,
    categoryClient: Number,
    firmClient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    }
});

module.exports = mongoose.model('Cliente', ClientSchema);
