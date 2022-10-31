const jwt = require('jsonwebtoken');
const express = require('express');
const controller = require('../controller/regis.controller');
const middleware = require('../middleware/regis.middleware');

const app = express.Router();

app.post('/', middleware, controller.postdetails);
app.post('/registration', middleware, controller.user_registration);

module.exports = app;
