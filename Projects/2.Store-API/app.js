require("dotenv").config();
//Async Error Handling
require("express-async-errors");

const express = require("express");
const app = express();

//Connect DB
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//Middleware
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">Products Route</a>');
});

//ProductsRoute
app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const startApp = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    // const db = await connectDB(process.env.MONGO_URI);
    // if (db) {
    //   console.log("Connected to the database");
    // }
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
