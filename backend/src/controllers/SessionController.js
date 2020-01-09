const OwnerCompany = require('../models/OwnerCompany');

module.exports = {
    async store(req, res){
        const {name, email, cpf, password} = req.body;

        let owner = await OwnerCompany.findOne({email, password});

        if(!owner) {
            owner = await OwnerCompany.create({name, email, cpf, password});
        }

        return res.json(owner);
    },

    async index(req, res){
        const{email, password} = req.body;

        const owner = await OwnerCompany.find({email, password});

        if(!owner) {
            return;
        }

        return res.json(owner);
    },
};
