const express = require('express');

const SessionController = require('./controllers/SessionController');
const CompanyController = require('./controllers/CompanyController');
const FirmController = require('./controllers/FirmController');
const ClientController = require('./controllers/ClienteController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Olá Marmitas BR"});
});

//Owner
routes.post('/sessions', SessionController.store);
routes.get('/owner', SessionController.index);
routes.put('/owner', SessionController.update);
routes.get('/owner/all', SessionController.show);
routes.delete('/owner/delete', SessionController.delete);

//Company
routes.post('/company', CompanyController.store);
routes.get('/company/all', CompanyController.show);
routes.put('/company', CompanyController.update);
routes.delete('/company', CompanyController.delete);

//Firm
routes.post('/firm', FirmController.store);
routes.get('/firm', FirmController.index);
routes.get('/firm/all', FirmController.show);
routes.put('/firm', FirmController.update);
routes.delete('/firm', FirmController.delete);

//Client
routes.post('/client', ClientController.store);
routes.get('/client', ClientController.show);

module.exports = routes;
