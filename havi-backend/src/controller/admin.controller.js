const admin = require('../model/admin.model');
const view_profile = require('../model/viewprofile.model')
const Registration = require('../model/reg.model')
const job_seeker =  require('../model/job.model')

const postdetails = async (req, res) => {
  const data = new admin({Name,Mail,ManageAccount}=req.body);
    
  const result = await data.save();
    console.log(result);
    res.send({result:result,message:"Success"})
  };

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

const viewAlldetails = async (req, res) => {
  const data = await view_profile.find()
  console.log(data);
  res.send(data)
};

const getAlldetails = async (req, res) => {
  const data = await admin.find()
  console.log(data);
  res.send(data)
};

const getdetails = async (req, res) => {
   const data = await admin.findOne({ _id: req.params.id });
   console.log(data);
   res.send(data);
 };

module.exports={
    postdetails,
    getAlldetails,
    viewprofile,
    getdetails,
    viewAlldetails
  }