const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Registration = require('../model/reg.model');
const config = require('../../config/config.json');

const postdetails = async (req, res) => {
  try{
  let user = await Registration.findOne({ Mail: req.body.Mail });
  if (user) return res.status(400).send({message:"you r already registered"});
 
  let user_mobile_no = await Registration.findOne({ Mobile: req.body.Mobile });
  if (user_mobile_no) return res.status(400).send({message:"you r already registered"});
  if(!user&&!user_mobile_no)
  {
  let user_name = await Registration.findOne({ UserName: req.body.UserName });
  if (user_name) return res.status(400).send({message:"user name not available..please try another.."});
  }

  user = new Registration(({Name,Mail,Mobile,Address,City,UserName,Password,UserType}=req.body));
    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(user.Password, salt);

  const result = await user.save();
  console.log(result);
 
  const token = jwt.sign({ _id: user._id }, config.JWTPRIVATEKEY);
  req.header;
  console.log(req.header);
  res.send({result:result,message:"Success"});
}
catch(err){
   console.log(err)
   res.status(401)
}
};

const user_login = async (req, res) => {
  let user = await Registration.findOne({ UserName: req.body.UserName });
  if (!user) return res.status(400).send({meesage:"user name is already registration"});
  let user_ps = await bcrypt.compare(req.body.Password, user.Password);
  if (!user_ps) return res.status(400).send({message:"Password is incorrect"});
  
  let user_type = await Registration.findOne({ UserType: req.body.UserType });
  if (user_type) return res.status(400).send({message:"user type is verifyed"});
 
   const token = jwt.sign({ _id: user._id }, config.JWTPRIVATEKEY);
  console.log(token);
  res.send({ user:user ,token: token ,message:"Success"});
};

const getAlldetails = async (req,res) => {
  const data = await Registration.find()
  console.log(data);
  res.send(data)
}

const getdetails = async (req, res) => {
 const data = await Registration.findOne({ _id: req.params.id });
 console.log(data);
 res.send(data);
};

module.exports = {
  postdetails,
  user_login,
  getAlldetails,
  getdetails
};
