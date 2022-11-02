const joi = require('joi');

const job_seeker = async (req, res, next) => {
  try {
    const data = joi.object({
        Name: joi.string().required(),
        Degree: joi.string().required(),
        Subject: joi.string().required(),
        Univercity: joi.string().required(),
        YearOfPassing: joi.number().required(),
        Experience: joi.string().required(),
        Company: joi.string().required(),
        CTC: joi.string().required(),
        FeedOfIntrest: joi.string().required()
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