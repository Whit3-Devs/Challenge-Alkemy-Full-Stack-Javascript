const { Router } = require("express");
const { getAllOperations, getByIdOperations, getCantLatestOperations, createOperation, deleteOperation, updateOperation } = require('../controllers/operationsController')
const routerOperations = Router();

routerOperations.get("/", getAllOperations);
routerOperations.get("/:id", getByIdOperations);
routerOperations.get("/latest/:amount", getCantLatestOperations);
routerOperations.post("/", createOperation);
routerOperations.put("/", updateOperation);
routerOperations.delete("/:id", deleteOperation);

module.exports = routerOperations;
