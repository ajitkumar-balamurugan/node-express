const createProduct = async (req, res) => {
  res.send(`Create Product Route`);
};

const displayProduct = async (req, res) => {
  res.send(`display Product Route`);
};

module.exports = {
  createProduct,
  displayProduct,
};
