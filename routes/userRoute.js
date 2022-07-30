const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    });
    if (user) res.send(user);
    else res.status(400).json(error);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newuser = new userModel({ ...req.body, verified: false });
    await newuser.save();
    res.send("User added succesfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
