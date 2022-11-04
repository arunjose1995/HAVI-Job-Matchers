const post_job = require('../model/postjob.model');

const postdetails = async (req, res) => {
    const data = new post_job({UserName,CompanyName,ContactPerson,ContactNumber,MailId,JobLocation,AreaOfWork,PostedOn,LastDate,Vacancy,JobRole,ProfessionalSkills}=req.body);
      
    const result = await data.save();
    console.log(data);
      console.log(result);
      res.send({result:result,message:"Success"});
    };

    const getAlldetails = async (req,res) => {
        const data = await post_job.find()
        console.log(data);
        res.send(data)
    }

    const getdetails = async (req, res) => {
        const data = await post_job.findOne({ _id: req.params.id });
        console.log(data);
        res.send(data);
    };
    
    const updatedetails = async (req, res) => {
        const data = await post_job.updateOne({ _id: req.params.id },
          {
            $set: {
                UserName: req.body.UserName,
                CompanyName: req.body.CompanyName,
                ContactPerson: req.body.ContactPerson,
                ContactNumber: req.body.ContactNumber,
                Mail: req.body.Mail,
                JobLocation: req.body.JobLocation,
                AreaOfWork: req.body.AreaOfWork,
                PostedOn: req.body.PostedOn,
                LastDate: req.body.LastDate,
                Vacancy: req.body.NoOfVacancy
            },
          }
        );
        console.log(data);
        res.send(data);
    };


module.exports={
    postdetails,
    getAlldetails,
    getdetails,
    updatedetails
}