const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const router = require('./routes/tasks');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.listen(3001, () => console.log("App is Listining on port 3001"))