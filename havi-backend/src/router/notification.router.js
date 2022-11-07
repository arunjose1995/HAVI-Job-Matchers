const express = require('express');
const controller = require('../controller/notification.controller');

const router = express.Router();

router.post('/notification', controller.mailNotify)

module.exports = router;