const view_profile = require('../model/viewprofile.model')
const Registration = require('../model/reg.model')
const job_seeker =  require('../model/job.model')
const post_job = require('../model/postjob.model')

const postdetails = async (req, res) => {
    RegistrationId = '6364dfdd2c118c3887c24ba9',
        JobSeekerId = '6364e09e2c118c3887c24bab',
        PostJobId = ''
    if (RegistrationId && JobSeekerId) {
    console.log("vanakkam")
        // user = new view_profile(({
        //     Name,
        //     Mail,
        //     Mobile,
        //     Address,
        //     City,
        //     Degree,
        //     Subject,
        //     University,
        //     YearOfPassing,
        //     Experience,
        //     Company,
        //     CTC,
        //     FieldOfInterest
        // } = req.body));
    
        // const result = await user.save();
        // console.log(result);
        res.send({  message: "Success" });
    }
    if (RegistrationId && PostJobId) {
        console.log("namasthey")   
    
    } else {
        console.log("error");
        res.send({  message: "error" });
    }
};

const getAlldetails = async (req,res) => {
    const data = await view_profile.find()
    console.log(data);
    res.send(data)
}



module.exports = {
    postdetails,
    getAlldetails
}