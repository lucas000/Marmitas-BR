require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_DB_CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

console.log('Server running');
app.listen(3333);
