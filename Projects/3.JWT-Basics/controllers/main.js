const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide a username and password", 400);
  }

  res.send("Login Page");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.ceil(Math.random() * 100);
  res
    .status(200)
    .send({ msg: "Hi John!", secret: `Your lucky number is ${luckyNumber}` });
};

module.exports = { login, dashboard };
