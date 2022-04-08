const { DataTypes } = require('sequelize');
const Sequelized = require('../utiles/database');

const Task = Sequelized.define('task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  initiator: {
    type: DataTypes.STRING,
  }
});

module.exports = Task;
