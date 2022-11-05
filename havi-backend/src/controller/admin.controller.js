const admin = require('../model/admin.model');
const view_profile = require('../model/viewprofile.model')

const postdetails = async (req, res) => {
  const data = new admin({Name,Mail,ManageAccount}=req.body);
    
  const result = await data.save();
    console.log(result);
    res.send({result:result,message:"Success"})
  };

const getAlldetails = async (req, res) => {
  const data = await admin.find()
  console.log(data);
  res.send(data)
};

const viewAlldetails = async (req, res) => {
  const data = await view_profile.find()
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
     viewAlldetails,
    getdetails
  }