const express = require("express");
const router = express.Router();
const userController = require("../app/api/controllers/users");

router.post("/signUp", userController.signUpUser);
router.post("/signIn", userController.signInUser);

module.exports = router;