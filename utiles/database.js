const Sequelize = require('sequelize');

require('dotenv').config()

const Sequelized = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST
  }
);

module.exports = Sequelized;
