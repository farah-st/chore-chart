const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/chore-chart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());

app.use('/chores', require('./routes/chores'));
app.use('/members', require('./routes/members'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));