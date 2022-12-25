const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasksRoute");
const connectDB = require("./database/connect");
require("dotenv").config();
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRoute);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const startApp = async () => {
  try {
    const test = await connectDB(process.env.MONGO_URI);
    // console.log(test);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
