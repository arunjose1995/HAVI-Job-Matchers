var nodemailer = require('nodemailer');

const mailNotify = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sowmyars456@gmail.com',
      pass: 'gdytcyiwuirkqdcj'
    }
});
  
var mailOptions = {
    from: 'sowmyars456@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
};
  
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(401).send({message:"invalid email"})
      console.log(error);
    } else {
      res.status(200).send({message:"mail send sucessfully"})
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  mailNotify
}