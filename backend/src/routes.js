const express = require('express');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Olá Marmitas BR"});
});

//Sessions
routes.get('/owner', SessionController.index);
routes.post('/sessions', SessionController.store);

module.exports = routes;