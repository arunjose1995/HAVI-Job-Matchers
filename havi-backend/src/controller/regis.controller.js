const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Registration = require('../model/reg.model');
const config = require('../../config/config.json');

const postdetails = async (req, res) => {
  try{
  let user = await Registration.findOne({ mail_id: req.body.mail_id });
  if (user) return res.status(400).send('user already registered');
  
  user = new Registration(({Name,mail_id,mobile_no,address,city,user_name,password,user_type}=req.body));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // let user_name= await Registration.findOne({ user_name: req.body.user_name });
  // if (user_name){
  //   return res.status(400).send('user name is not available');
  // }else{
     
  // }
  const result = await user.save();
  console.log(result);
  const token = jwt.sign({ _id: user._id }, config.JWTPRIVATEKEY);
  req.header;
  console.log(req.header);
  res.send(result);
}
catch(err){
   console.log(err)
   res.status(401)
}
};

const user_registration = async (req, res) => {
  const user = await Registration.findOne({ mail_id: req.body.mail_id });
  if (!user) return res.status(400).send('email is already registered');
  
  const user_ps = await bcrypt.compare(req.body.password, user.password);
  if (!user_ps) return res.status(400).send('password is incorrect');
  
  const token = jwt.sign({ _id: user._id }, config.JWTPRIVATEKEY);
  console.log(token);
  res.send({ token, user });
};



module.exports = {
  postdetails,
  user_registration
};
