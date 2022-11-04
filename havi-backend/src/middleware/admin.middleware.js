const joi = require('joi');

const admin = async (req, res, next) => {
  try {
    const data = joi.object({
        Name: joi.string().required(),
        Mail: joi.string().required(),
        ManageAccount: joi.string().required()
    });
    await data.validateAsync(req.body);
    next();
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

module.exports = {
    admin
  }