const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post('/user/signup',userController.signup);
router.post('/user/check-email',userController.checkEmail);

module.exports = router;