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

    async index(req, res) {
        const{price, company_id, owner_id} = req.body;

        let priceSale = await PriceSale.findOne(
            {"price": parseFloat(price), company: company_id, owner: owner_id});

        if(!priceSale) {
            return res.json('Price sale not exists');
        }

        return res.json(priceSale);
    },

    

    async update(req, res) {
        const{oldPrice, price, oldOwner, owner, 
            oldCompany, company} = req.body;

        console.log(parseFloat(oldPrice));
        console.log(parseFloat(price));
        
        const priceSale = await PriceSale.updateOne(
            {"price": parseFloat(oldPrice), "owner": oldOwner, "company": oldCompany},
            {"price": parseFloat(price), owner, company},
            function (err, priceUpdated) {
                if (err) throw error
                console.log("Updated price sale was completed")
            }
        );     

        if(!priceSale) {
            return;
        }

        return res.json(priceSale);
    },

    async delete(req, res) {
        const{price, company_id, owner_id} = req.body;

        let priceSale = PriceSale.findOneAndDelete(
            {"price": parseFloat(price), company: company_id, owner: owner_id},
            {},
            function(err, priceDeleted) {
                if(err) throw err
                console.log(priceDeleted)
            }
        );     

        if(priceSale) {
            return res.json({ message: 'Price sale was removed'});
        }
    }
}
