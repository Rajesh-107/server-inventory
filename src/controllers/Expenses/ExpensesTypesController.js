const DataModel = require("../../models/Expenses/ExpenseTypesModel")
const CreateService = require("../../services/common/CreateService")
const DropDownService = require("../../services/common/DropDownService")
const ListService = require("../../services/common/ListService")
const UpdateService = require("../../services/common/UpdateService")

exports.CreateExpenseTypes = async(req, res) => {
    let Result = await CreateService(req, DataModel)
    res.status(200).json(Result)
}