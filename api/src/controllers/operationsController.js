const { Operations } = require("../db");
// const { Op } = require('sequelize')

const getAllOperations = async (req, res, next) => {
    try {
        const allOperations = await Operations.findAll({});
        res.json(allOperations);
    } catch (error) {
        next(error)
    }
};

const getByIdOperations = async (req, res, next) => {
    const { id } = req.params;

    try {
      let operationId = await Operations.findByPk(id);
      res.json(operationId);
    } catch (error) {
      next(error)
    }
};

const getCantLatestOperations = async (req, res, next) => {
    let { amount } = req.params;
    let count = 0;
    try {
        let operations = await Operations.findAll({
            order: [["createdAt", "DESC"]],
        });

        let operationsArray = []

        for (const operat of operations) {
            count += 1;

            if(count <= amount) {
                operationsArray.push(operat)
            }
        }

        // let operationsCount = operations.map((operat) => {

        // })

        res.send(operationsArray);
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
    getByIdOperations,
    getCantLatestOperations,
    createOperation,
    deleteOperation,
    updateOperation
}