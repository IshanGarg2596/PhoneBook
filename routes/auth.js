// authentication, login, check logged in user routes
const express = require("express");
const router = express.Router();

// @route  GET api/auth
// @desc   get logged in  user
// @access  Private
router.get("/", (req, res) => {
  res.send("get logged in user ");
});

// @route  POST api/auth
// @desc   auth user and get token
// @access  Public
router.post("/", (req, res) => {
  res.send("login user ");
});

module.exports = router;
