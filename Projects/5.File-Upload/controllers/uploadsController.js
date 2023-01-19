const { StatusCodes } = require("http-status-codes");
const path = require("path");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadProductLocal = async (req, res) => {
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

const uploadProduct = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};
module.exports = {
  uploadProduct,
};
