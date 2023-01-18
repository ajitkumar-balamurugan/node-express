const express = require("express");
const {
  displayProduct,
  createProduct,
} = require("../controllers/productController");
const { uploadProduct } = require("../controllers/uploadsController");
const router = express.Router();

router.route("/").get(displayProduct).post(createProduct);
router.route("/upload").post(uploadProduct);

module.exports = router;
