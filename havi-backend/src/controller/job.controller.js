const job_seeker = require('../model/job.model');

const postdetails = async (req, res) => {
  const data = new job_seeker({Name,Degree,Subject,Univercity,Year_of_passing,Experience,Company,CTC,Feed_of_intrest}=req.body);
    
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

  const updatedetails = async (req, res) => {
    const data = await job_seeker.updateOne({ _id: req.params.id },
      {
        $set: {
            Name: req.body.Name,
            Degree: req.body.Degree,
            Subject: req.body.Subject,
            Univercity: req.body.Univercity,
            Year_of_passing: req.body.Year_of_passing,
            Experience: req.body.Experience,
            Company: req.body.Company,
            CTC: req.body.CTC,
            Feed_of_intrest: req.body.Feed_of_intrest
          
        },
      })
    console.log(data);
    res.send(data);
    }

    module.exports={
    postdetails,
    getAlldetails,
    getdetails,
    updatedetails
  }