const express = require("express");
const app = express();
const routers = express.Router();

const users = ["Mansoor", "Awais", "Hello", "World"];

// app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getUser/:id", (req, res) => {
  res.send(users[req.params.id]);
});

app.listen(8000, () => {
  console.log("Listening on port 8000...");
});
