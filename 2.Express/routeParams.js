const express = require("express");
const app = express();
const { products, people } = require("./data.js");
const port = 5000;
app.listen(5000, () => console.log("Server listening on port " + port));

app.get("/", (req, res) => {
  //   const params = req.params;
  //   console.log(params);
  res.send(products);
});
// app.get("/products/1", (req, res) => {
//   //   const params = req.params;
//   //   console.log(params);
//   const newProducts = products.find((product) => product.id === 1);
//   res.send(newProducts);
// });
app.get("/products/:productID", (req, res) => {
  const id = req.params.productID;
  //   console.log(params);
  const newProducts = products.find((product) => product.id === parseInt(id));
  res.send(newProducts);
});
