const express = require('express');

const router = express.Router();

const TaskController = require('../controllers/tasks');

router.post('/task', TaskController.CreateTask);

router.get('/task/:id', TaskController.GetTask);

router.get('/task', TaskController.GetAllTasks);

router.put('/task', TaskController.UpdateTask);

router.delete('/task/:id', TaskController.DeleteTask)

module.exports = router;