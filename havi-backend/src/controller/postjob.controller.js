const post_job = require('../model/postjob.model');

const postdetails = async (req, res) => {
    const data = new post_job({Name,Company_name,Contact_person,Contact_number,Mail_id,job_Location,Area_of_work,Posted_on,Last_date,No_of_vacancy,Job_role,Professional_skills}=req.body);
      
    const result = await data.save();
    console.log(data);
      console.log(result,"Registration successfully");
      res.send(result);
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
                Name: req.body.Name,
                Company_name: req.body.company_name,
                Contact_person: req.body.contact_person,
                Contact_number: req.body.contact_number,
                Mail_id: req.body.mail_id,
                job_Location: req.body.job_Location,
                Area_of_work: req.body.area_of_work,
                Posted_on: req.body.posted_on,
                Last_date: req.body.last_date,
                No_of_vacancy: req.body.no_of_vacancy
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