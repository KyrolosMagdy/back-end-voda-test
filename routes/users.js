const express = require('express');

const usersRouter = express.Router();

const UsersController = require('../controllers/user');

usersRouter.post('/user', UsersController.CreateUser);

usersRouter.get('/user', UsersController.GetAllUsers);

module.exports = usersRouter;