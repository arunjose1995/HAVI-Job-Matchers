const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  Mail_id: {
    type: String,
  },
  Mobile_no: {
    type: Number,
  },
  Address: {
    type: String,
  },
  Univercity: {
    type: String,
  },
  User_name: {
    type: String,
  },
  Password: {
    type: String,
  },
  User_type: {
    type: String,
  },
});
module.exports = mongoose.model('Registration', havi_Job_portal);
