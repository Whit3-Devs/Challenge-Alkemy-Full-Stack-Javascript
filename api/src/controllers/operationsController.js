const { Operations } = require("../db");
// const { Op } = require('sequelize')

const getAllOperations = async (req, res, next) => {
    res.json({msg: "i am get"})
};

const createOperation = async (req, res, next) => { 
    res.json({msg: "i am post"})
};

const deleteOperation = async (req, res, next) => { 
    res.json({msg: "i am delete"})
};

const updateOperation = async (req, res, next) => {
    res.json({msg: "i am update"})
};


module.exports = {
    getAllOperations,
    createOperation,
    deleteOperation,
    updateOperation
}