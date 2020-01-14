const PriceSale = require('../models/PriceSale');

module.exports = {
    async show(req, res) {
        const priceSale = await PriceSale.find({});

        return res.json(priceSale);
    },

    async store(req, res) {
        const{price, company_id, owner_id} = req.body;

        let priceSale = await PriceSale.findOne(
            {"price": parseFloat(price), company: company_id, owner: owner_id});

        if(priceSale){
            return res.json('Price sale already exists');
        }

        priceSale = await PriceSale.create({
            "price": parseFloat(price),
            company: company_id,
            owner: owner_id
        });

        return res.json(priceSale);
    },
}
