const { Router } = require("express");

const router = Router();

let admins = [
  { id: 1, name: "Mansoor" },
  { id: 2, name: "Awais" },
];

router.get("/", (req, res) => {
  res.send(admins);
});

router.get("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const admins = admins.find((admin) => admin.id === id);

  if (!admin) {
    return res.status(404).send("404: Admin Not Found");
  }
  res.send(admin);
});

router.post("/", (req, res) => {
  const newAdmin = req.body;
  newAdmin.id = admins.length + 1;
  admins.push(newAdmin);
  res.status(200).json(admins);
});

router.put("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const admin = admins.find((admin) => admin.id === id);
  if (!admin) {
    return res.status(404).send("404: Admin Not Found");
  }
  admins[req.params.id - 1] = { ...req.body };
  admins[req.params.id - 1].id = id;
  res.send(admins);
});

router.delete("/:id", (req, res) => {
  id = parseInt(req.params.id);
  const admin = admins.find((admin) => admin.id === id);
  if (!admin) {
    return res.status(404).send("404: Admin Not Found");
  }
  admins = admins.filter((admin) => admin.id !== id);
  res.send(admins);
});

module.exports = router;
