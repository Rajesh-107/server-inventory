const DataModel = require("../../models/Users/UsersModel")
const OTPSModel = require("../../models/Users/OTPSModel")

const UserCreateService = require("../../services/user/UserCreateService")
const UserDetailsService = require("../../services/user/UserDetailsService")
const UserLoginService = require("../../services/user/UserLoginService")
const UserResetPassService = require("../../services/user/UserResetPassService")
const UserUpdateService = require("../../services/user/UserUpdateService")
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService")
const UserVerifyOTPService = require("../../services/user/UserVerifyOtpService")


exports.Registration = async (req, res) => {
    let Result = await UserCreateService(req,DataModel)
    res.status(200).json(Result);
}

exports.Login = async(req, res) =>{
    let Result = await UserLoginService(req, DataModel)
    res.status(200).json(Result);
}
exports.ProfileDetails = async(req, res) =>{
    let Result = await UserDetailsService(req, DataModel)
    res.status(200).json(Result);
}

exports.ProfileUpdate = async (req, res) => {
    let Result = await UserUpdateService(req, DataModel)
    res.status(200).json(Result);
}

exports.RecoverVerifyEmail = async (req, res) =>{
    let Result = await UserVerifyEmailService(req, DataModel)
    res.status(200).json(Result);
}

exports.RecoverVerifyOTP = async(req, res) =>{
    let Result = await UserVerifyOTPService(req, OTPSModel)
    res.status(200).json(Result);
}
exports.RecoverReset = async (req, res) => {
    let Result = await UserResetPassService(req,DataModel)
    res.status(200).json(Result);
}