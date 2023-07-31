const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const routes = require("./routes/index");

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on Port:${port}...`);
});
