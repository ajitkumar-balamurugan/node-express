class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customErrorFunc = (msg, sc) => {
  return new CustomAPIError(msg, sc);
};

module.exports = { CustomAPIError, customErrorFunc };
