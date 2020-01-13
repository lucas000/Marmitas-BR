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
            return res.json("Client already exists");
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

    async index(req, res) {
        const{nameClient, categoryClient, firmClient} = req.body;

        const client = await Client.findOne({nameClient, categoryClient, firmClient});

        if(!client) {
            return res.status(400).json("Client not exists");
        }

        return res.json(client);
    },

    async delete(req, res) {
        const{nameClient, categoryClient, firmClient} = req.body;
        let client;

        if(categoryClient == "firm") {
            client = await Client.findOneAndDelete(
                {nameClient, categoryClient, firmClient},
                {},
                function(err, clientRemoved) {
                    if(err) throw err
                    console.log(clientRemoved);
                }
            );
        } else {
            client = await Client.findOneAndDelete(
                {nameClient, categoryClient, firmClient: null},
                {},
                function(err, clientRemoved) {
                    if(err) throw err
                    console.log(clientRemoved);
                }
            );
        }

        if(client) {
            return res.json('Client was not removed');
        } else {
            return res.json('Client was removed');
        }
    },

    async update(req, res) {
        const{oldNameClient, nameClient, categoryClient, oldFirmClient, firmClient} = req.body;

        const client = await Client.updateOne(
            {
                "nameClient": oldNameClient, 
                categoryClient, 
                "firmClient": oldFirmClient
            },
            { nameClient, categoryClient, firmClient },
            function(err, clientUpdate) {
                if(err) throw err
                console.log("Client was updated")
            }
        );

        if(!client) {
            return res.json({message: "error to update the document"});
        }

        return res.json(client);
    },
}
