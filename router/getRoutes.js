const express = require("express");
const router = express.Router();
const { users } = require("../controllers");

router.get("/", users);

module.exports = router;
