const express = require('express');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Olá Marmitas BR"});
});

//Owner
routes.post('/sessions', SessionController.store);
routes.get('/owner', SessionController.index);
routes.put('/owner', SessionController.update);
routes.get('/owner/all', SessionController.show);

module.exports = routes;