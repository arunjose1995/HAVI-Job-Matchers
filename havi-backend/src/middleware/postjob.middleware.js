const joi = require('joi');

const post_job = async (req, res, next) => {
    try {
      const data = joi.object({
        Name: joi.string().required(),
        Company_name: joi.string().required(),
        Contact_person: joi.string().required(),
        Contact_number: joi.number().required(),
        Mail_id: joi.string().required(),
        job_Location: joi.string().required(),
        Area_of_work: joi.string().required(),
        Posted_on: joi.string().required(),
        Last_date: joi.string().required(),
        No_of_vacancy: joi.number().required(),
        Job_role: joi.string().required(),
        Professional_skills: joi.string().required()
      })
      await data.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = {
    post_job
}
