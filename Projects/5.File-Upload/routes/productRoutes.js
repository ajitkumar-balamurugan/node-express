const mongoose = require("mongoose");
const {
  displayProduct,
  createProduct,
} = require("../controllers/productController");
const { uploadProduct } = require("../controllers/uploadsController");
const router = mongoose.Router();

router.route("/").get(displayProduct), post(createProduct);
router.route("/upload").post(uploadProduct);
