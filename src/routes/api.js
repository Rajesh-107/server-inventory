const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifymiddleware")

const UsersController = require("../controllers/Users/UsersController")
const BrandsController = require("../controllers/Brands/BrandsController")
const SuppliersController = require("../controllers/Suppliers/SuppliersController")
const CategoriesController = require("../controllers/Categories/CategoriesController")
const CustomersController = require("../controllers/Customers/CustomersController")
const ExpensesTypesController = require("../controllers/Expenses/ExpensesTypesController")
const ExpensesController = require("../controllers/Expenses/ExpensesController")

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
router.post("/CreateCategories", AuthVerifyMiddleware, CategoriesController.CreateCategories)
router.post("/UpdateCategories/:id", AuthVerifyMiddleware, CategoriesController.UpdateCategories)
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CategoriesController.CategoriesList)
router.get("/CategoriesDropDown", AuthVerifyMiddleware,CategoriesController.CategoriesDropDown)

//Customers
router.post("/CreateCustomers", AuthVerifyMiddleware,CustomersController.CreateCustomers)
router.post("/UpdateCustomers/:id", AuthVerifyMiddleware,CustomersController.UpdateCustomers)
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CustomersController.CustomersList)
router.get("/CustomersDropDown", AuthVerifyMiddleware, CustomersController.CustomersDropDown)

//suppliers
router.post('/CreateSuppliers', AuthVerifyMiddleware, SuppliersController.CreateSuppliers);
router.post("/UpdateSuppliers/:id", AuthVerifyMiddleware,SuppliersController.UpdateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SuppliersController.SuppliersList)
router.get("/SuppliersDropDown", AuthVerifyMiddleware, SuppliersController.CategoriesDropDown)

//ExpensesTypes
router.post("/CreateExpenseTypes", AuthVerifyMiddleware,ExpensesTypesController.CreateExpenseTypes)
router.post("/UpdateExpenseTypes/:id", AuthVerifyMiddleware, ExpensesTypesController.UpdateExpenseTypes)
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware,ExpensesTypesController.ExpenseTypesList)
router.get("/ExpenseTypesDropDown",AuthVerifyMiddleware,ExpensesTypesController.ExpenseTypesDropDown)

//Expenses
router.post("/CreateExpenses",AuthVerifyMiddleware,ExpensesController.CreateExpenses);
router.post("/UpdateExpenses",AuthVerifyMiddleware,ExpensesController.UpdateExpenses);

module.exports = router;