const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Read
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Update
router.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// Delete
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User deleted" });
});

module.exports = router;
