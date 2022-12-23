const express = require("express");
const app = express();

const port = 5000;
app.listen(5000, () => console.log("Server listening on port " + port));

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
  console.log("User hit the Home Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
  console.log("User hit the About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

// console.log(app);
