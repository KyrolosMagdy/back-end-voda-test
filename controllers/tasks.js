const Task = require('../models/task');

exports.CreateTask = (req, res) => {
  const { title, description, userId } = req.body;
  console.log('title: ', JSON.stringify(req.body));
  Task.create({
    title,
    description,
    initiator: userId,
    status: 1,
  })
    .then((result) => {
      console.log('result: ', result);
      res.send(result);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
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
  Task.findByPk(id).then(result => {
      if (result) {
          return result.destroy()
      }
      throw new Error('Not Found')
  }).then(result => {
      res.send({message: 'Task Deleted'})
  }).catch(err => {
      console.log('err: ', err)
  })
};
