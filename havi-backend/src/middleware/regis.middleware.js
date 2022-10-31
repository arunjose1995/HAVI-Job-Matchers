const joi = require('joi');

const Registration = async (req, res, next) => {
  try {
    const user = joi.object({
      Name: joi.string().required(),
      mail_id: joi.string().required(),
      mobile_no: joi.number().required(),
      address: joi.string().required(),
      city: joi.string().required(),
      user_name: joi.string().required(),
      password: joi.string().required(),
      user_type: joi.string().required()
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
  
