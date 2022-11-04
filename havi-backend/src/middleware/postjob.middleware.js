const joi = require('joi');

const post_job = async (req, res, next) => {
    try {
      const data = joi.object({
        UserName: joi.string().required(),
        CompanyName: joi.string().required(),
        ContactPerson: joi.string().required(),
        ContactNumber: joi.number().required(),
        MailId: joi.string().required(),
        JobLocation: joi.string().required(),
        AreaOfWork: joi.string().required(),
        PostedOn: joi.string().required(),
        LastDate: joi.string().required(),
        Vacancy: joi.number().required(),
        JobRole: joi.string().required(),
        ProfessionalSkills: joi.string().required()
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
