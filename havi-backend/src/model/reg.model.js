const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  mail_id: {
    type: String,
  },
  mobile_no: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  user_name: {
    type: String,
  },
  password: {
    type: String,
  },
  user_type: {
    type: String,
  },
});
module.exports = mongoose.model('Registration', havi_Job_portal);
