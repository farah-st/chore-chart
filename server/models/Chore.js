const mongoose = require('mongoose');

module.exports = mongoose.model('Chore', {
  title: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', default: null },
  dueDate: { type: String, required: true },
  status: { type: String, required: true }
});

