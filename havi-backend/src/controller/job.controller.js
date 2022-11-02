const job_seeker = require('../model/job.model');

const postdetails = async (req, res) => {
  const data = new job_seeker({Name,Degree,Subject,Univercity,YearOfPassing,Experience,Company,CTC,FeedOfIntrest}=req.body);
    
  const result = await data.save();
    console.log(result);
    res.send({result:result,message:"Success"});
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
            YearOfPassing: req.body.YearOfPassing,
            Experience: req.body.Experience,
            Company: req.body.Company,
            CTC: req.body.CTC,
            FeedOfIntrest: req.body.FeedOfIntrest
          
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