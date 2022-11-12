const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifymiddleware")

const UsersController = require("../controllers/Users/UsersController")
const BrandsController = require("../controllers/Brands/BrandsController")

const router = express.Router()

//user Profile
router.post("/Registration", UsersController.Registration)
router.post("/Login",UsersController.Login)
router.post("/ProfileUpdate", AuthVerifyMiddleware,UsersController.ProfileUpdate)
router.get("/ProfileDetails",AuthVerifyMiddleware , UsersController.ProfileDetails)
router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail)
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP)
router.post("/RecoverResetPass",UsersController.RecoverReset)

//Brands
router.post("/CreateBrand", AuthVerifyMiddleware, BrandsController.CreateBrand)
router.post("/UpdateBrand/:id", AuthVerifyMiddleware, BrandsController.UpdateBrand)
router.get("/BrandList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, BrandsController.BrandList)
router.get("/BrandDropDown", AuthVerifyMiddleware, BrandsController.BrandDropDown)

//categories


module.exports = router;