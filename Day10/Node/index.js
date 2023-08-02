const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;

const { v2 } = require("cloudinary");
const cloudinary = v2;
cloudinary.config({
  cloud_name: "djjn4dxpu",
  api_key: "435913532677436",
  api_secret: "fz83D8iflwaBX6v3ugmU_Ce2wMw",
});

const routes = require("./routes/index");
const connectDb = require("./db/connect");

app.use(cors());
app.use(express.json());
app.use(routes);

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}...`);
});
