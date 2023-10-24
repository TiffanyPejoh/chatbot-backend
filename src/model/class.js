const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema(
  {
    classId: { type: String, required: true, unique: true },
    className: { type: String, required: true },
    teacherId: { type: String, required: true },
    students: { type: Array, required: true }
  },
  { collection: 'class' }
);

const Class = mongoose.model('ClassSchema', ClassSchema);

module.exports = Class;
