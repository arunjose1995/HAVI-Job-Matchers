const express = require('express');
const controller = require('../controller/admin.controller');
const middleware = require('../middleware/admin.middleware')

const router = express.Router();

router.post('/admin', middleware.admin, controller.postdetails)
router.post('/viewprofile',controller.viewprofile)
router.get('/adminapi', controller.getAlldetails)
router.get('/viewalldetailes',controller.viewAlldetails)
router.get('/adminapi/:id',controller.getdetails)

module.exports = router;
