const mongoose = require('mongoose');

module.exports = mongoose.model('Member', {
  name: String,
  age: Number
});
