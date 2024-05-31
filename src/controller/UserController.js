const userSchema = require("../model/UserModel");
const encrypt = require("../util/Encrypt");
const tokenUtil = require("../util/TokenUtil");

const creaetUser = async (req, res) => {
  const hashedPassword = await encrypt.hashPassword(req.body.password);

  try {
    // const userObj = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: hashedPassword
    // }
    const userObj = Object.assign(req.body, { password: hashedPassword });
    const savedUser = await userSchema.create(userObj);
    res.status(201).json({
      status: "success",
      data: savedUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userFromEmail = await userSchema.findOne({ email: email });
    //om@gmail.com :
    console.log("user from email", userFromEmail);
    if (userFromEmail != null) {
      //plain password, hashed password
      const isMatch = await encrypt.comparePassword(
        password,
        userFromEmail.password
      ); //true...
      if (isMatch) {

        const token = tokenUtil.generateToken(userFromEmail.toObject());
        // console.log("token", token);
        

        res.status(200).json({
          status: "success",
          token: token,
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: "Password not matched",
        });
      }
    } else {
      res.status(400).json({
        status: "fail",
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = { creaetUser, loginUser };
