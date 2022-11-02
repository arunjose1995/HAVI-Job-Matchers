// const jwt = require('jsonwebtoken');
// const config = require('../../config/config.json');

// const auth = async (req, res, next) => {
//   const token = req.header('x-auth -token');
//   if (!token) return res.status(401).send('Access denied.No Token Process');
//   try {
//     const decoded = jwt.verify(token, config.JWTPRIVATEKEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(404).send('Invalid TOKEN');
//   }
// };
// module.exports = {
//   auth
// };
