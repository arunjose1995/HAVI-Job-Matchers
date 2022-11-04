const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
    RegistrationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reg.model'
      },
    JobSeekerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'job.model'
    }
    
})

module.exports = mongoose.model('view_profile', havi_Job_portal);