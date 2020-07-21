const router = require("router")();

router.get("/", (req, res) => {
  res.json({ message: "User Login" });
});

module.exports = router;
