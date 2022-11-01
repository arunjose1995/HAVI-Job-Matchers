const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  Name: {
    type: String,
  },
  Company_name: {
    type: String,
  },
  Contact_person: {
    type: String,
  },
  Contact_number: {
    type: Number,
  },
  Mail_id:{
    type: String,
  },
  job_Location:{
    type: String,
  },
  Area_of_work:{
    type: String,
  },
  Posted_on:{
    type: String,
  },
  Last_date:{
    type: String,
  },
  No_of_vacancy:{
    type: Number,
  },
  Job_role:{
    type: String,
  },
  Professional_skills:{
    type: String,
  }
})

module.exports = mongoose.model('post_job', havi_Job_portal);