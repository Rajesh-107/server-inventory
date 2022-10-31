const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifymiddleware")

const UsersController = require("../controllers/Users/UsersController")

const router = express.Router()

//user Profile
router.post("/Registration", UsersController.Registration)
router.post("/Login",UsersController.Login)
router.post("/ProfileUpdate", AuthVerifyMiddleware,UsersController.ProfileUpdate)
router.post("/ProfileDetails",AuthVerifyMiddleware , UsersController.ProfileDetails)
router.post("/Login",UsersController.Login)
router.post("/Login",UsersController.Login)

module.exports = router;