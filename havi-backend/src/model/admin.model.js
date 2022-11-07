const mongoose = require('mongoose');

const havi_Job_portal = new mongoose.Schema({
    Name:{
        type: String,
    },
    Mail:{
        type: String,
    },
    ManageAccount:{
        type: String,
    },
    RegistrationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reg.model'
      },
    JobSeekerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'job.model'
    },
    profile: {
        type:Object
    }
})

module.exports = mongoose.model('admin', havi_Job_portal);