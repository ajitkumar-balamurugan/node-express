const { StatusCodes } = require("http-status-codes");
const path = require("path");
const CustomError = require("../errors");

const uploadProduct = async (req, res) => {
  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload Image");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("Please upload image smaller 1MB");
  }

  const filePath = path.join(
    __dirname,
    `../public/uploads/${productImage.name}`
  );
  await productImage.mv(filePath);
  // console.log(filePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProduct,
};
