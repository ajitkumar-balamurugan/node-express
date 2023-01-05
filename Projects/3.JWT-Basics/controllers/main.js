const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide a username and password");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.status(200).send({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.ceil(Math.random() * 100);
  res.status(200).send({
    msg: `Hi ${req.user.username}!`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
