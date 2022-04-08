const Task = require('../models/task');
const User = require('../models/user');

exports.CreateTask = (req, res, next) => {
  const { title, description, userId, assingedToId } = req.body;

  User.findByPk(userId)
    .then((result) => {
      if (result) {
        User.findByPk(assingedToId)
          .then((result) => {
            if (result) {
              Task.create({
                title,
                description,
                createdBy: userId,
                status: 1,
                assignedTo: assingedToId,
              })
                .then((result) => {
                  res.send(result);
                })
                .catch((err) => {
                  const error = new Error(err);
                  return next(error);
                });
            } else {
              res.status(401).send({ message: 'User not found' });
            }
          })
          .catch((err) => {
            const error = new Error(err);
            return next(error);
          });
      } else {
        const error = new Error('User not found');
        return next(error);
      }
    })
    .catch((err) => {
      const error = new Error(err);
      return next(error);
    });
};

exports.GetTask = (req, res, next) => {
  const { id } = req.params;
  Task.findByPk(id)
    .then((result) => {
      if (!result) {
        const error = new Error('Task not found');
        return next(error);
      }
      res.send(result);
    })
    .catch((err) => {
      const error = new Error(err);
      return next(error);
    });
};

exports.GetAllTasks = (req, res, next) => {
  Task.findAll()
    .then((result) => {
      if (!result) {
        const error = new Error('Please try again later');
        return next(error);
      }
      res.send(result);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

exports.UpdateTask = (req, res, next) => {
  const { id, title, description, userId, assingedToId } = req.body;
  Task.update(
    {
      title,
      description,
      initiator: userId,
      assignedTo: assingedToId,
    },
    {
      where: { id: id },
    }
  )
    .then((result) => {
      if (!result) {
        const error = new Error('error updating this task');
        return next(error);
      }
      return res.send(result);
    })
    .catch((err) => {
      const error = new Error(err);
      return next(error);
    });
};

exports.DeleteTask = (req, res, next) => {
  const { id } = req.params;
  Task.findByPk(id)
    .then((result) => {
      if (result) {
        return result.destroy();
      }
      const error = new Error('Task not found');
      return next(error);
    })
    .then((result) => {
      res.send({ message: 'Task Deleted' });
    })
    .catch((err) => {
      const error = new Error(err);
      return next(error);
    });
};
