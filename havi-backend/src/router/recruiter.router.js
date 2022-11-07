const express = require('express');
const controller = require('../controller/postjob.controller');
const middleware = require('../middleware/postjob.middleware');


const router = express.Router();

router.post('/details', middleware.post_job, controller.postdetails);
router.get('/get',controller.getAlldetails)
router.get('/get/:id',controller.getdetails)
router.put('/updatedetails/:id',controller.updatedetails)


module.exports =router;