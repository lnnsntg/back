const express = require("express");
const router = express.Router();
const { hello } = require("../controllers");

router.post("/hello", hello);

module.exports = router;
