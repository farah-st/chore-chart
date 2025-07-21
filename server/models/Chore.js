const mongoose = require('mongoose');

module.exports = mongoose.model('Chore', {
  title: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  dueDate: String,
  status: String 
});
