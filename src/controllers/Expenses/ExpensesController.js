const DataModel = require("../../models/Expenses/ExpensesModel")
const CreateService = require("../../services/common/CreateService");
const ListOnejoinService = require("../../services/common/ListOnejoinService");
const UpdateService = require("../../services/common/UpdateService");

exports.CreateExpenses = async (req, res) => {
    let Result = await CreateService(req, DataModel);
    res.status(200).json(Result)
}

exports.UpdateExpenses = async(req, res) => {
    let Result = await UpdateService(req, DataModel)
    res.status(200).json(Result)
}

exports.ExpensesList = async (req, res) => {

    let SearchRgx = {"regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray = [{Note: SearchRgx}, {Amount: SearchRgx}, {'Type.Name': SearchRgx}]
    let JoinStage = {$lookup: {from: "expenseTypes", localField: "TypeID", foreignField: "_id", as: "Type"}}

    let Result = await ListOnejoinService(req,DataModel, SearchArray, JoinStage)

    res.status(200).json(Result)
}