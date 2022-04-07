const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/tasks');

const sequelize = require('./utiles/database');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

sequelize
  .sync()
  .then((result) => {
    app.listen(3001, () => console.log('App is Listining on port 3001'));
  })
  .catch((err) => {
    console.log('err: ', err);
  });
