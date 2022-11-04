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
    }
})

module.exports = mongoose.model('admin', havi_Job_portal);