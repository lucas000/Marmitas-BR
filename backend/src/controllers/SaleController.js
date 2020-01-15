const Sale = require('../models/Sale');

module.exports = {
    async show(req, res) {
        let sale = await Sale.find({});

        return res.json(sale);
    },

    async store(req, res) {
        const{price, date, company_id, owner_id, client_id, priceSale_id, firm_id} = req.body;

        let sale = await Sale.findOne(
            {"price": parseFloat(price), date, 
            "company": company_id, "owner": owner_id, 
            "client": client_id, "priceSale": priceSale_id, 
            "firm": firm_id
            }
        );

        if(sale){
            return res.json('Sale already exists');
        }

        sale = await Sale.create({
                "price": parseFloat(price), date, 
                "company": company_id, "owner": owner_id, 
                "client": client_id, "priceSale": priceSale_id, 
                "firm": firm_id
            }
        );

        return res.json(sale);
    },

}
