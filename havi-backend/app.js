const mongoose = require('mongoose');
const express = require('express');
const config = require('./config/config.json');
const router = require('./src/router/regis.router');
const logger = require('./logger');

const app = express();
app.use(express.json());
app.use(router);

mongoose
  .connect(config.URL)
  .then(() => console.log('connected to mongose..'))
  .catch((err) => console.log('could not connect to mongoDB...', err));
port = config.PORT || 3003;
app.listen(port, () => {
  console.log(`Lisening the sever ${port}....`);
});
console.log('hello');
