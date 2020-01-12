const express = require('express');

const SessionController = require('./controllers/SessionController');
const CompanyController = require('./controllers/CompanyController');

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

module.exports = routes;