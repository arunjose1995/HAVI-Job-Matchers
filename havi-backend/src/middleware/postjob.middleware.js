const joi = require('joi');

const post_job = async (req, res, next) => {
    try {
      const data = joi.object({
        Name: joi.string().required(),
        company_name: joi.string().required(),
        contact_person: joi.string().required(),
        contact_number: joi.number().required(),
        mail_id: joi.string().required(),
        location: joi.string().required(),
        area_of_work: joi.string().required(),
        posted_on: joi.string().required(),
        last_date: joi.string().required(),
        no_of_vacancy: joi.number().required(),
        job_role: joi.string().required(),
        professional_skills: joi.string().required()
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
