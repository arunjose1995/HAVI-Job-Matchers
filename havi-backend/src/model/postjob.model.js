const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  company_name: {
    type: String,
  },
  contact_person: {
    type: String,
  },
  contact_number: {
    type: Number,
  },
  mail_id:{
    type: String,
  },
  location:{
    type: String,
  },
  area_of_work:{
    type: String,
  },
  posted_on:{
    type: String,
  },
  last_date:{
    type: String,
  },
  no_of_vacancy:{
    type: Number,
  },
  job_role:{
    type: String,
  },
  professional_skills:{
    type: String,
  }
})

module.exports = mongoose.model('post_job', havi_Job_portal);