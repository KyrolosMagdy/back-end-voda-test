const Task = require('../models/task');
const User = require('../models/user');

exports.CreateTask = (req, res) => {
  const { title, description, userId } = req.body;

  User.findByPk(userId).then((result) => {
    if (result) {
      Task.create({
        title,
        description,
        createdBy: userId,
        status: 1,
      })
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    }
  }).catch(err => console.log('err: ', err));
};

exports.GetTask = (req, res) => {
  const { id } = req.params;
  Task.findByPk(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log('err: ', err));
};

exports.GetAllTasks = (req, res) => {
  Task.findAll()
    .then((result) => res.send(result))
    .catch((err) => console.log('err: ', err));
};

exports.UpdateTask = (req, res) => {
  const { id, title, description, userId } = req.body;
  Task.update(
    {
      title,
      description,
      initiator: userId,
    },
    {
      where: { id: id },
    }
  )
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

exports.DeleteTask = (req, res) => {
  const { id } = req.params;
  Task.findByPk(id)
    .then((result) => {
      if (result) {
        return result.destroy();
      }
      throw new Error('Not Found');
    })
    .then((result) => {
      res.send({ message: 'Task Deleted' });
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
