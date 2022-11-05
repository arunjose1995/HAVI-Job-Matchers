const view_profile = require('../model/viewprofile.model')
const Registration = require('../model/reg.model')
const job_seeker =  require('../model/job.model')
const post_job = require('../model/postjob.model')

const viewprofile = async (req, res) => {
   
    try {
        const { id1, id2 } = req.body
        const regdata = await Registration.findById({ _id: id1 }).select(["-UserName", "-Password", "-UserType"]).lean();
     
        const jobdata = await job_seeker.findById({ _id: id2 }).select(["-UserName"]).lean();
        const combinObj={...regdata,...jobdata}
        console.log(combinObj);

        const result = await view_profile.create({ profile:combinObj })
        console.log(result);
          res.send({result:result});
    }
    catch (err) {
        res.send(err)
    }

};
  
module.exports = {
    viewprofile
}
