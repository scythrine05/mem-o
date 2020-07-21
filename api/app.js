const express = require("express");
const user = require("./user");
const about = require("./about.js");

const app = express();
app.use("/user", user);
app.use("/about", about);

app.get("/", (req, res) => {
  res.json({ message: "Homepage" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
