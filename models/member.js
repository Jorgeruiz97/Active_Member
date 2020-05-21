const { Schema, model } = require('mongoose');

const memberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  meritPoints: {
    type: Number,
    required: true,
    default: 0
  },
  organizations: {
    type: [String],
    required: true,
    default: []
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  },
  membershipExpiration: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = model('members', memberSchema);
