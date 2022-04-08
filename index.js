const express = require('express');
const cors = require('cors');
const router = require('./routes/tasks');

const Sequelized = require('./utiles/database');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use(router);

Sequelized.sync()
  .then((result) => {
    app.listen(3001, () => console.log('App is Listining on port 3001'));
  })
  .catch((err) => {
    console.log('err: ', err);
  });
