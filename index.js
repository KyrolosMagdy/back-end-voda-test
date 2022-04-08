const express = require('express');
const cors = require('cors');
const router = require('./routes/tasks');
const userRouter = require('./routes/users');

const Sequelized = require('./utiles/database');
const Task = require('./models/task');
const User = require('./models/user');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(userRouter);

User.hasOne(Task, {
  foreignKey: 'createdBy',
});
Task.belongsTo(User, {
  foreignKey: 'createdBy',
});

User.hasOne(Task, {
  foreignKey: 'assignedTo'
});
Task.belongsTo(User, {
  foreignKey: "assignedTo"
})
// Sequelized.sync({ force: true })

Sequelized.sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: 'Kyrolos',
        avatar:
          'https://gravatar.com/avatar/d019c3bbce78acfe72176071e6e0d977?s=400&d=robohash&r=x',
      });
    }
    return Promise.resolve(user);
  })
  .then((res) => {
    app.listen(3001, () => console.log('App is running on port: 3001'));
  })
  .catch((err) => {
    console.log('err: ', err);
  });
