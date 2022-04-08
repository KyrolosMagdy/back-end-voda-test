const User = require('../models/user');

exports.CreateUser = (req, res, next) => {
  const { name, avatar } = req.body;

  User.create({
    name,
    avatar,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      const error = new Error(err);
      return next(error);
    });
};

exports.GetAllUsers = (req, res, next) => {
  User.findAll()
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send({ message: 'Not Found' });
      }
    })
    .catch((err) => {
      const error = new Error(err);
      return next(error);
    });
};
