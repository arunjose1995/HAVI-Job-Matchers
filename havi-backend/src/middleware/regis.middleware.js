const joi = require('joi');

const Registration = async (req, res, next) => {
  try {
    const user = joi.object({
      Name: joi.string(),
      Mail_id: joi.string(),
      Mobile_no: joi.number(),
      Address: joi.string(),
      Univercity: joi.string(),
      User_name: joi.string().required(),
      Password: joi.string().required(),
      User_type: joi.string().required()
    });
    await user.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = {
  Registration
}
  
