const express = require('express');
const controller = require('../controller/postjob.controller');
const middleware = require('../middleware/postjob.middleware');


const app = express.Router();

app.post('/details', middleware.post_job, controller.postdetails);
app.get('/api',controller.getAlldetails)
app.get('/api/:id',controller.getdetails)
app.put('/update/:id',controller.updatedetails)
app.delete('/remove/:id',controller.removedetails)

module.exports =app;