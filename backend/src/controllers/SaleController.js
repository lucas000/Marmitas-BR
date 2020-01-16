const Sale = require('../models/Sale');

module.exports = {
    async show(req, res) {
        let sale = await Sale.find({});

        return res.json(sale);
    },

    async store(req, res) {
        const{price, date, quantity, company_id, owner_id, client_id, priceSale_id, firm_id} = req.body;

        let sale = await Sale.findOne(
            {"price": parseFloat(price), date, 
            "company": company_id, "ownerCompany": owner_id, 
            "client": client_id, "priceSale": priceSale_id, 
            "firm": firm_id
            }
        );

        if(sale){
            return res.json('Sale already exists');
        }

        sale = await Sale.create({
                "price": parseFloat(price), date, 
                "company": company_id, "ownerCompany": owner_id, 
                "client": client_id, "priceSale": priceSale_id, 
                "firm": firm_id,
                quantity
            }
        );

        return res.json(sale);
    },

    async index(req, res) {
        const{price, date, quantity, company, ownerCompany, 
            client, priceSale, firm} = req.body;

        let sale = await Sale.findOne({
                price,
                date,
                company, 
                ownerCompany,
                quantity, 
                client, 
                priceSale,
                firm
            }
        );

        if(!sale) {
            return res.json('Sale not exists');
        }

        return res.json(sale);
    },

    async update(req, res) {
        const{oldPrice, price, oldDate, date, oldQuantity, quantity, oldCompany, company, 
            oldClient, client, oldOwnerCompany, ownerCompany, oldPriceSale, priceSale, oldFirm, firm} = req.body;


        const sale = await Sale.updateOne(
            {
                "price": oldPrice,
                "date": oldDate,
                "company": oldCompany,
                "client": oldClient, 
                "priceSale": oldPriceSale,
                "firm": oldFirm,
                "ownerCompany": oldOwnerCompany,
                "quantity": oldQuantity
            },
            
            {
                price, date, company, client, ownerCompany, priceSale, firm, quantity
            },
            
            
            function (err, priceUpdated) {
                if (err) throw error
                console.log("Sale was completed updated")
            }
        );     

        if(!sale) {
            return;
        }

        return res.json(sale);
    },

    async delete(req, res) {
        const{price, date, quantity, company, ownerCompany, 
            client, priceSale, firm} = req.body;

        let sale = Sale.findOneAndDelete(
            {price, date, company, ownerCompany, client, priceSale, firm, quantity},
            { },
            function(err, saleDeleted) {
                if(err) throw err
                console.log(saleDeleted)
            }
        );     

        if(sale) {
            return res.json({ message: 'Sale was removed'});
        }
    },
}
