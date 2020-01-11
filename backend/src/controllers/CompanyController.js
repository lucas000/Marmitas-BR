const Company = require('../models/Company');
const OwnerCompany = require('../models/OwnerCompany');

module.exports = {
    async store(req, res) {
        const{name, ownerCompany_id} = req.body;

        console.log(ownerCompany_id);

        const owner = await OwnerCompany.findById(ownerCompany_id);

        if(!owner) {
            return res.status(400).json({
                error: "Owner company not exists",
            });
        }

        const company = await Company.create({
            name,
            ownerCompany: ownerCompany_id
        });

        return res.json(company);
    },

    async show(req, res) {
        const company = await Company.find();

        if(!company) {
            return res.json("Any register exists yet");
        }

        return res.json(company);
    },
};
