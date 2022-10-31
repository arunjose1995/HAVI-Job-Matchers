const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  degree:{
    type: String,
  },
  subject:{
    type: String,
  },
  univercity:{
    type: String,
  },
  year_of_passing:{
    type: Number,
  },
  experience:{
    type: String,
  },
  company:{
    type: String,
  },
  CTC:{
    type: String,
  },
  feed_of_intrest:{
    type: String,
  }

})

module.exports = mongoose.model('job_seeker', havi_Job_portal);
