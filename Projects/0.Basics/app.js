const express = require("express");
const testRouter = require("./routes");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

//Json middleware
app.use(express.json());

//Router middleware
app.use("/api/v1", testRouter);

// connect DB
const connectDB = (URI) => {
  mongoose.set("strictQuery", true); //Mongoose instructed
  return mongoose.connect(URI);
};
// Start app
const start = async () => {
  try {
    // mongoose.set("strictQuery", true); //Mongoose instructed
    // const test = mongoose.connect(process.env.MONGO_URI);
    const test = await connectDB(process.env.MONGO_URI);
    if (test) {
      console.log(`Database Connected`);
    }
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
