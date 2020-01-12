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

    async update(req, res) {
        const{name, ownerCompany_id} = req.body;

        const company = await Company.updateOne(
            {ownerCompany: ownerCompany_id}, 
            {name},
            function (err, companyName) {
                if (err) throw error
                console.log("update company completed")
            }
        );

        if(!company) {
            return;
        }

        return res.json(company);
    },

    async delete(req, res) {
        const{name, ownerCompany_id} = req.body;

        let companyToRemove = await Company.findOneAndDelete(
            {name, ownerCompany: ownerCompany_id},
            {},
            function(error, removed){
                if(error) throw error
                console.log(removed);
            });

        if(companyToRemove){
            return res.json('Company was not removed');
        } else {
            return res.json('Company was removed');
        }
    },
};
