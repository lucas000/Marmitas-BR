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

    async update(req, res) {
        const{ name, email, password, cpf } = req.body;

        const owner = await OwnerCompany.update(
            {cpf}, 
            {$set: { email, password, name }}, 
            function (err, user) {
                if (err) throw error
                console.log(user)
                console.log("update user complete")
        });

        if(!owner) {
            return;
        }

        return res.json(owner);
    },

    async show(req, res){
        let owner = await OwnerCompany.find({});

        return res.json(owner);
    },
};
