const joi = require('joi');

const job_seeker = async (req, res, next) => {
  try {
    const data = joi.object({
        Name: joi.string().required(),
        degree: joi.string().required(),
        subject: joi.string().required(),
        univercity: joi.string().required(),
        year_of_passing: joi.number().required(),
        experience: joi.string().required(),
        company: joi.string().required(),
        CTC: joi.string().required(),
        feed_of_intrest: joi.string().required()
    });
    await data.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = {
  job_seeker
}