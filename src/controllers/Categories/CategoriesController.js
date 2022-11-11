const DataModel = require("../../models/Categories/CategoriesModel")
const CreateService = require("../../services/common/CreateService")
const UpdateService = require("../../services/common/UpdateService")



exports.CreateCategories = async (req, res) => {
    let Result = await CreateService(req, DataModel)
    res.status(200).json(Result)
}

exports.UpdateCategories = async (req, res) => {
    let Result = await UpdateService(req,DataModel)
    res.status(200).json(Result)
}


