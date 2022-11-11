const DataModel = require("../../models/Categories/CategoriesModel")
const CreateService = require("../../services/common/CreateService")
const ListService = require("../../services/common/ListService")
const UpdateService = require("../../services/common/UpdateService")



exports.CreateCategories = async (req, res) => {
    let Result = await CreateService(req, DataModel)
    res.status(200).json(Result)
}

exports.UpdateCategories = async (req, res) => {
    let Result = await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.CategoriesList = async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options":"i"}
    let SearchArray = [{Name: SearchRgx}]
    let Result = await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}
