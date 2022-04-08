const { DataTypes } = require('sequelize');

const Sequelized = require('../utiles/database');

const User = Sequelized.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  avatar: DataTypes.STRING,
});

module.exports = User;
