const express = require('express');
const controller = require('../controller/job.controller');
const middleware = require('../middleware/job.middleware')

const app = express.Router();

app.post('/post', middleware.job_seeker, controller.postdetails);
app.get('/api',controller.getAlldetails)
app.get('/api/:id',controller.getdetails)
app.put('/update/:id',controller.updatedetails)

module.exports = app;
