const { Router } = require("express");
const { getAllOperations, createOperation, deleteOperation, updateOperation } = require('../controllers/operationsController')
const routerOperations = Router();

routerOperations.get("/", getAllOperations);
routerOperations.post("/", createOperation);
routerOperations.put("/", updateOperation);
routerOperations.delete("/:id", deleteOperation);

module.exports = routerOperations;
