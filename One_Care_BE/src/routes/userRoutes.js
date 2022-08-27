const express = require("express");

const router = express.Router();
const userService = require("../service/user");

router.post("/register", userService.register);
router.post("/login", userService.loginUser);

module.exports = router;
