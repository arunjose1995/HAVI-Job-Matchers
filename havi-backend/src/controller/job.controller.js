const job_seeker = require('../model/job.model');

const postdetails = async (req, res) => {
  const data = new job_seeker({Name,degree,subject,univercity,year_of_passing,experience,company,CTC,feed_of_intrest}=req.body);
    
  const result = await data.save();
    console.log(result,"Registration successfully");
    res.send(result);
  };
 const getAlldetails = async (req,res) => {
     const data = await job_seeker.find()
     console.log(data);
     res.send(data)
 }
 
const getdetails = async (req, res) => {
    const data = await job_seeker.findOne({ _id: req.params.id });
    console.log(data);
    res.send(data);
  };

  module.exports={
    postdetails,
    getAlldetails,
    getdetails
  }