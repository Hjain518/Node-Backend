const express = require("express");
const { exampleController } = require("../controllers/exampleController");
const router = express.Router();

router.get("/example", exampleController);

module.exports = router;