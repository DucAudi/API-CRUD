const express = require("express");
const routes = require("./routes/route");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.URL_MONGOOSE);
    console.log("DB connected!!!");
  } catch (error) {
    console.log("DB not connect!!!");
  }
}

connect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use(routes);

app.listen(4000, () => {
  console.log("Server is running...");
});
