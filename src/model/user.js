const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // 'John Doe'
    userId: { type: String, required: true, unique: true }, // '1234567890'
    role: { type: String, required: true }, // 'student' or 'lecturer'
    phone: { type: String, required: true } // '6281234567890'
  },
  { collection: 'users' }
);

const User = mongoose.model('UserSchema', UserSchema);

module.exports = User;
