const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // // const salt = await bcrypt.genSalt(10);
  // // const hashedPassword = await bcrypt.hash(password, salt);
  // const hashedPassword = await bcrypt.hash(password, 10);
  // const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send("Login User");
};

module.exports = { register, login };
