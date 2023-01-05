const express = require("express");
const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/login", login);
router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
