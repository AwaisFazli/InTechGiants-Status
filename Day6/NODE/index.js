const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const users = [];

const admins = [];

app.use(express.json());

app.post("/users/signup", (req, res) => {
  users.push(req.body);
  res.send(users);
});

app.post("/admin/signup", (req, res) => {
  admins.push(req.body);
  res.send(admins);
});

app.post("/admin/signin", (req, res) => {
  console.log(req.body);
  const admin = admins.filter(
    (admin) =>
      admin.username == req.body.username && admin.password == req.body.password
  );
  if (admin) {
    var token = jwt.sign(admin[0], "hello");
    res.send(token);
  } else {
    res.send("Admin Not Found");
  }
});

app.get("/admin/getusers", (req, res) => {
  token = req.headers.token;
  const decrypt = jwt.verify(token, "hello");
  const admin = admins.filter(
    (admin) =>
      admin.username == decrypt.username && admin.password == decrypt.password
  );

  if (admin.length) {
    res.send(users);
  } else {
    res.send("Not Authorized");
  }

  if (admin.length) {
    res.send(users);
  } else {
    res.send("You are not Authorized");
  }
});

app.listen(8000, () => {
  console.log("Server is Litening on PORT 8000...");
});
