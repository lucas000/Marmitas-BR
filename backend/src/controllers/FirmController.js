const Firm = require('../models/Firm');

module.exports = {
    async store(req, res) {
        const{nameFirm, addressFirm, companyOwner} = req.body;

        let firm = await Firm.findOne({
            nameFirm, companyOwner
        });

        if(firm){
            return res.json('Firm already exists');
        }

        firm = await Firm.create({
            nameFirm,
            addressFirm,
            companyOwner
        });

        return res.json(firm);
    },

    async show(req, res) {

        const firms = await Firm.find();
        return res.json(firms);
    },

    async index(req, res) {
        const{nameFirm, companyOwner} = req.body;

        const firm = await Firm.findOne({nameFirm, companyOwner});

        if(!firm) {
            return res.json("Not exists any registers by these parameters");
        }

        return res.json(firm);
    },

    async update(req, res) {
        const{oldNameFirm, nameFirm, addressFirm, companyOwner} = req.body;

        const firm = await Firm.updateOne(
            {"nameFirm": oldNameFirm, companyOwner}, 
            {nameFirm, addressFirm},
            function (err, firmName) {
                if (err) throw error
                console.log("update firm completed")
            }
        );

        if(!firm) {
            return;
        }

        return res.json(firm);
    },

    async delete(req, res) {
        const{nameFirm, addressFirm, companyOwner} = req.body;

        let firm = Firm.findOneAndDelete(
            {nameFirm, addressFirm, companyOwner},
            {},
            function(err, firmDeleted) {
                if(err) throw err
                console.log(firmDeleted)
            }
        );     

        if(firm) {
            return res.json({ message: 'firm was removed'});
        }
    }
}
