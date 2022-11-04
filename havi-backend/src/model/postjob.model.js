const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
  UserName: {
    type: String,
  },
  CompanyName: {
    type: String,
  },
  ContactPerson: {
    type: String,
  },
  ContactNumber: {
    type: Number,
  },
  MailId:{
    type: String,
  },
  JobLocation:{
    type: String,
  },
  AreaOfWork:{
    type: String,
  },
  PostedOn:{
    type: String,
  },
  LastDate:{
    type: String,
  },
  Vacancy:{
    type: Number,
  },
  JobRole:{
    type: String,
  },
  ProfessionalSkills:{
    type: String,
  }
})

module.exports = mongoose.model('post_job', havi_Job_portal);