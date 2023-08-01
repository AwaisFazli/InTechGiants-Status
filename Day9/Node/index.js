const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const routes = require("./routes/index");
const connectDb = require("./db/connect");

app.use(express.json());
app.use(routes);

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}...`);
});
