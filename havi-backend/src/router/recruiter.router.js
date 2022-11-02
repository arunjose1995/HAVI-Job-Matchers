const express = require('express');
const controller = require('../controller/postjob.controller');
const middleware = require('../middleware/postjob.middleware');


const app = express.Router();

app.post('/details', middleware.post_job, controller.postdetails);
app.get('/get',controller.getAlldetails)
app.get('/get/:id',controller.getdetails)
app.put('/updatedetails/:id',controller.updatedetails)


module.exports =app;