const express = require('express');
const controller = require('../controller/viewprofile.controller');


const app = express.Router();

app.post('/viewprofile', controller.viewprofile)


module.exports = app;