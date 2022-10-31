const post_job = require('../model/postjob.model');

const postdetails = async (req, res) => {
    const data = new post_job({Name,company_name,contact_person,contact_number,mail_id,location,area_of_work,posted_on,last_date,no_of_vacancy,job_role,professional_skills}=req.body);
      
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
                company_name: req.body.company_name,
                contact_person: req.body.contact_person,
                contact_number: req.body.contact_number,
                mail_id: req.body.mail_id,
                location: req.body.location,
                area_of_work: req.body.area_of_work,
                posted_on: req.body.posted_on,
                last_date: req.body.last_date,
                no_of_vacancy: req.body.no_of_vacancy
            },
          }
        );
        console.log(data);
        res.send(data);
    };

    const removedetails = async (req, res) => {
        const data = await post_job.deleteOne(req.params.id);
        console.log(data);
        res.send(data);
      };

module.exports={
    postdetails,
    getAlldetails,
    getdetails,
    updatedetails,
    removedetails
}