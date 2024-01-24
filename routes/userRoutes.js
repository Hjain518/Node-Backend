const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post('/signup',userController.signup);
router.post('/check-email',userController.checkEmail);

module.exports = router;