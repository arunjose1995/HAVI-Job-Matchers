const registration = require('../src/router/regis.router')
const jobseeker = require('../src/router/job.router')
const recruiter = require('../src/router/recruiter.router')
const admin = require('../src/router/admin.router')
const notification = require('../src/router/notification.router')

module.exports={
    registration,
    jobseeker,
    recruiter,
    admin,
    notification
}