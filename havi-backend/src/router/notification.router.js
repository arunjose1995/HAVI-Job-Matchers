const express = require('express');
const controller = require('../controller/notification.controller');

const app = express.Router();

app.post('/notification',controller.mailNotify)