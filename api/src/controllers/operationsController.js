const { Operations } = require("../db");
// const { Op } = require('sequelize')

const getAllOperations = async (req, res, next) => {
    try {
        const allOperations = await Operations.findAll({});
        res.send(allOperations);
    } catch (error) {
        next(error)
    }
};

const createOperation = async (req, res, next) => { 
    try {
        const { concept, amount, date, typeOperation } = req.body;
        const newOperation = await Operations.create({
            concept,
            amount,
            date,
            typeOperation
        });
        res.status(201).json(newOperation);
    } catch (error) {
        next(error);
    }
};

const deleteOperation = async (req, res, next) => { 
    try {
        const { id } = req.params;
        const destroyOperation = await Operations.destroy({ where: { id } });
        res.status(201).json(destroyOperation);
    } catch (error) {
        next(error);
    }
};

const updateOperation = async (req, res, next) => {
    try {
        const { id, concept, amount, date, typeOperation } = req.body;
        const updateOperationOBJ = { id, concept, amount, date, typeOperation };
        let putOperationObj = {};
        for (const key in updateOperationOBJ) {
            if(updateOperationOBJ[key] && key !== 'id'){
                putOperationObj[key] = updateOperationOBJ[key];
            }
        }

        const updateOperation = await Operations.update(
            putOperationObj,
            { where: { id } }
        )
        res.status(201).json(updateOperation);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAllOperations,
    createOperation,
    deleteOperation,
    updateOperation
}