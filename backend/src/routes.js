const express = require('express');

const SessionController = require('./controllers/SessionController');
const CompanyController = require('./controllers/CompanyController');
const FirmController = require('./controllers/FirmController');
const ClientController = require('./controllers/ClientController');
const PriceSaleController = require('./controllers/PriceSaleController');
const SaleController = require('./controllers/SaleController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Olá Marmitas BR"});
});

//Owner
routes.post('/sessions', SessionController.store);
routes.get('/owner', SessionController.index);
routes.get('/owner/all', SessionController.show);
routes.put('/owner', SessionController.update);
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
routes.get('/client', ClientController.index);
routes.get('/client/all', ClientController.show);
routes.put('/client', ClientController.update);
routes.delete('/client', ClientController.delete);

//Price sale
routes.post('/pricesale', PriceSaleController.store);
routes.get('/pricesale/all', PriceSaleController.show);
routes.get('/pricesale', PriceSaleController.index);
routes.put('/pricesale', PriceSaleController.update);
routes.delete('/pricesale', PriceSaleController.delete);

//Sale
routes.post('/sale/', SaleController.store);
routes.get('/sale/all', SaleController.show);

module.exports = routes;
