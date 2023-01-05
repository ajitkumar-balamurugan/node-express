const { UnauthorizedError } = require("../errors/");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("No token Present");
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
    req.user = decoded;

    next();
  } catch (error) {
    throw new UnauthorizedError("Invalid Token");
  }
};
module.exports = authMiddleware;
