const jwt = require('jsonwebtoken');
const express = require('express');
const controller = require('../controller/regis.controller');
const middleware = require('../middleware/regis.middleware');

const app = express.Router();

app.post('/registration', middleware.Registration, controller.postdetails);
app.post('/login', middleware.Registration, controller.user_login);
app.get('/get/:id',controller.getdetails)
app.get('/get',controller.getAlldetails)

module.exports = app;