const express = require('express');

const usersRouter = express.Router();

const UsersController = require('../controllers/user');

usersRouter.post('/user', UsersController.CreateUser);

module.exports = usersRouter;