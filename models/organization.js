const { Schema, model } = require('mongoose');

const organizationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  contextId: {
    type: String,
    required: true,
    unique: true
  },
  president: {
    type: String,
    required: true
  },
  members: {
    type: [Object],
    required: true
  }
});

module.exports = model('organizations', organizationSchema);
