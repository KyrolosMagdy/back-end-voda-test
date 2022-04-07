const Sequelize = require('sequelize');
const sequalize = require('../utiles/database');

const Task = sequalize.define([
    'task',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.NUMBER,
            allowNull: false,
        },
        createdBy: {
            type: Sequelize.STRING
        }
    },
]);

module.exports = Task;