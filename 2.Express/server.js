const express = require("express");
const path = require("path");

const app = express();

const port = 5000;
app.listen(5000, () => console.log(`Server listening on port ${port}`));

app.use(express.static("./navbar-app"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("./navbar-app", "index.html"));
// });

app.get("*", (req, res) => {
  res.status(404);
  res.send(`Page not found`);
});

// console.log(path.join(__dirname, "./navbar-app", "index.html"));
// console.log(path.resolve("./navbar-app", "index.html"));
