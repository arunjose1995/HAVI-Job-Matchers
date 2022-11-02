const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  Degree:{
    type: String,
  },
  Subject:{
    type: String,
  },
  Univercity:{
    type: String,
  },
  YearOfPassing:{
    type: Number,
  },
  Experience:{
    type: String,
  },
  Company:{
    type: String,
  },
  CTC:{
    type: String,
  },
  FeedOfIntrest:{
    type: String,
  }

})

module.exports = mongoose.model('job_seeker', havi_Job_portal);
