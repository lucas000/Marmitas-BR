const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nameClient: String,
    categoryClient: {
        type: String,
        enum : ['firm','house'],
        default: 'firm',
    },

    firmClient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    },
});

module.exports = mongoose.model('Client', ClientSchema);
