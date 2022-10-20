const User = require("../Models/User");

exports.signupService = async (userInfo) => {
  const result = await User.create(userInfo);
  return result;
};

exports.loginService = async (email) => {
  const result = await User.findOne({email});
  return result;
};
