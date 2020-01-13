const Client = require('../models/Client');

module.exports = {
    async show(req, res) {
        const clients = await Client.find({});

        return res.json(clients);
    },

    async store(req, res) {
        const {nameClient, categoryClient, firmClient} = req.body;
        let client;

        if(categoryClient == "firm") {
            client = await Client.findOne({nameClient, categoryClient, firmClient});
        } else {
            client = await Client.findOne({nameClient, categoryClient});
        }
    
        if(client) {
            return res.json("Cliet already exists");
        }

        if(categoryClient == "firm") {
            client = await Client.create({
                nameClient, 
                categoryClient, 
                firmClient
            });
        } else {
            client = await Client.create({
                nameClient, 
                categoryClient, 
                firmClient: null
            });
        }
        
        return res.json(client);
    },
}
