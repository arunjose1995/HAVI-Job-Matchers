const joi = require('joi');

const job_seeker = async (req, res, next) => {
  try {
    const data = joi.object({
        UserName: joi.string().required(),
        Degree: joi.string().required(),
        Subject: joi.string().required(),
        University: joi.string().required(),
        YearOfPassing: joi.number().required(),
        Experience: joi.string().required(),
        Company: joi.string().required(),
        CTC: joi.string().required(),
        FieldOfInterest: joi.string().required()
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