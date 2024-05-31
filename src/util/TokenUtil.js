const jwt = require("jsonwebtoken");
const secret = "samir";

const generateToken = (user) => {
  const token = jwt.sign(user, secret);
  return token;
};
module.exports = { generateToken };
