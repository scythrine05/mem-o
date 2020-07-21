const router = require("router")();
const login = require("./login");
const sign = require("./sign");

router.use("/login", login);
router.use("/sign", sign);

router.get("/", (req, res) => {
  res.json({ message: "User" });
});

module.exports = router;
