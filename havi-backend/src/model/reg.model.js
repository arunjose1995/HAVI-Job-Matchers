const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  Mail: {
    type: String,
  },
  Mobile: {
    type: Number,
  },
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  UserName: {
    type: String,
  },
  Password: {
    type: String,
  },
  UserType: {
    type: String,
  },
});
module.exports = mongoose.model('Registration', havi_Job_portal);
