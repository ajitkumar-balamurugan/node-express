const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasksRoute");
const connectDB = require("./database/connect");
require("dotenv").config();

app.use(express.json());
app.use("/api/v1/tasks", tasksRoute);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3000;

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
