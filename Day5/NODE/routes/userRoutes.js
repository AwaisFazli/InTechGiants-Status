const { Router } = require("express");

const router = Router();

let users = [
  { id: 1, name: "Mansoor" },
  { id: 2, name: "Awais" },
  { id: 3, name: "Mutahir" },
  { id: 4, name: "Hello" },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send("404: User Not Found");
  }
  res.send(user);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(200).json(users);
});

router.put("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send("404: User Not Found");
  }
  users[req.params.id - 1] = { ...req.body };
  users[req.params.id - 1].id = id;
  res.send(users);
});

router.delete("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send("404: User Not Found");
  }
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

module.exports = router;
