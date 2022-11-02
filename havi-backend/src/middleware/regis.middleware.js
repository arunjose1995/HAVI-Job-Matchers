const joi = require('joi');

const Registration = async (req, res, next) => {
  try {
    const user = joi.object({
      Name: joi.string(),
      Mail: joi.string(),
      Mobile: joi.number(),
      Address: joi.string(),
      City: joi.string(),
      UserName: joi.string().required(),
      Password: joi.string().required(),
      UserType: joi.string().required()
      
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
  
