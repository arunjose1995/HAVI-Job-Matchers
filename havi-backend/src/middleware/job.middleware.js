const joi = require('joi');

const job_seeker = async (req, res, next) => {
  try {
    const data = joi.object({
        Name: joi.string().required(),
        Degree: joi.string().required(),
        Subject: joi.string().required(),
        Univercity: joi.string().required(),
        Year_of_passing: joi.number().required(),
        Experience: joi.string().required(),
        Company: joi.string().required(),
        CTC: joi.string().required(),
        Feed_of_intrest: joi.string().required()
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