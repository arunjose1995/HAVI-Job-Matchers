const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Registration = require('../model/reg.model');
const config = require('../../config/config.json');

const postdetails = async (req, res) => {
  try{
  let user = await Registration.findOne({ Mail_id: req.body.Mail_id });
  if (user) return res.status(400).send('you r already registered');
 
  let user_mobile_no = await Registration.findOne({ Mobile_no: req.body.Mobile_no });
  if (user_mobile_no) return res.status(400).send('you r already registered');
  if(!user&&!user_mobile_no)
  {
  let user_name = await Registration.findOne({ User_name: req.body.User_name });
  if (user_name) return res.status(400).send('user name not available..please try another.. ');
  }

  user = new Registration(({Name,Mail_id,Mobile_no,Address,Univercity,User_name,Password,User_type}=req.body));
    const salt = await bcrypt.genSalt(10);
    user.Password = await bcrypt.hash(user.Password, salt);

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

const user_login = async (req, res) => {
  let user = await Registration.findOne({ User_name: req.body.User_name });
  if (!user) return res.status(400).send('user name is already registration');
  
  
  let user_ps = await bcrypt.compare(req.body.Password, user.Password);
  if (!user_ps) return res.status(400).send('Password is incorrect');
  
  let user_type = await Registration.findOne({ User_type: req.body.User_type });
  if (user_type) return res.status(400).send('user type is verifyed');
 
   const token = jwt.sign({ _id: user._id }, config.JWTPRIVATEKEY);
  console.log(token);
  res.send({ user:user ,token: token });
};



module.exports = {
  postdetails,
  user_login
};
