const router = require("router")();

router.get("/", (req, res) => {
  res.json({ message: "User sign" });
});

module.exports = router;
