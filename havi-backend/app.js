const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const config = require('./config/config.json');
const router = require('./router/router');
const logger = require('./logger');

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(router.router1)
app.use(router.router2)
app.use(router.router3)


mongoose
  .connect(config.URL)
  .then(() => console.log('connected to mongose..'))
  .catch((err) => console.log('could not connect to mongoDB...', err));
port = config.PORT || 3003;
app.listen(port, () => {
  console.log(`Lisening the sever ${port}....`);
});

console.log("hello");