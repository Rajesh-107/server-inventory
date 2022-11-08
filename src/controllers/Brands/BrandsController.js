const DataModel = require("../../models/Brands/BrandsModel")
const CreateService = require("../../services/common/CreateService")
const UpdateService = require("../../services/common/UpdateService")


exports.CreateBrand = async (req, res) => {
    let Result = await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.BrandList = async (req, res) => {
    let Result = await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

