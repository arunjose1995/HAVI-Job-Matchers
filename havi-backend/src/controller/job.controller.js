const job_seeker = require('../model/job.model');

const postdetails = async (req, res) => {
  const data = new job_seeker({UserName,Degree,Subject,University,YearOfPassing,Experience,Company,CTC,FieldOfIntrest}=req.body);
    
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
            UserName: req.body.UserName,
            Degree: req.body.Degree,
            Subject: req.body.Subject,
            University: req.body.University,
            YearOfPassing: req.body.YearOfPassing,
            Experience: req.body.Experience,
            Company: req.body.Company,
            CTC: req.body.CTC,
            FieldOfIntrest: req.body.FieldOfIntrest
          
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