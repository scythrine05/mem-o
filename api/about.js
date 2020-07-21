const router = require("router")();

router.get("/", (req, res) => {
  res.json({ message: "about" });
});

module.exports = router;
