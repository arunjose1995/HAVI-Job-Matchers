const express = require('express');
const controller = require('../controller/job.controller');
const middleware = require('../middleware/job.middleware')

const router = express.Router();

router.post('/postSeeker', middleware.job_seeker, controller.postdetails);
router.get('/api',controller.getAlldetails)
router.get('/api/:id',controller.getdetails)
router.put('/update/:id',controller.updatedetails)

module.exports = router;
