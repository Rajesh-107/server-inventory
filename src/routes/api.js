const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifymiddleware")

const UsersController = require("../controllers/Users/UsersController")

const router = express.Router()

module.exports = router;