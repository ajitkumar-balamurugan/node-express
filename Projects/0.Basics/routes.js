const router = require("express").Router();
const User = require("./schema");

router.get("/test", (req, res) => {
  res.send(`Router working...`);
});

router.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).send(`Router error: ${error}`);
  }
});

module.exports = router;
