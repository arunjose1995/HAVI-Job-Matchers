const express = require('express');
const controller = require('../controller/admin.controller');
const middleware = require('../middleware/admin.middleware')

const app = express.Router();

app.post('/admin', middleware.admin, controller.postdetails);
app.get('/adminapi', controller.getAlldetails)
app.get('/viewalldetailes',controller.viewAlldetails)
app.get('/adminapi/:id',controller.getdetails)

module.exports = app;
