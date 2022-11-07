const jwt = require('jsonwebtoken');
const express = require('express');
const controller = require('../controller/regis.controller');
const middleware = require('../middleware/regis.middleware');

const router = express.Router();

router.post('/registration', middleware.Registration, controller.postdetails);
router.post('/login', middleware.Registration, controller.user_login);
router.get('/get/:id',controller.getdetails)
router.get('/get',controller.getAlldetails)

module.exports = router;