const express = require("express");
const financialDetailsController = require("../controllers/financialController");
const router = express.Router();

router.post('/',financialDetailsController.saveDetails);

module.exports = router;