const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { collection: 'users' }
);

const User = mongoose.model('UserSchema', UserSchema);

module.exports = User;
