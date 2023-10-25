const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema(
  {
    classId: { type: String, required: true, unique: true }, // 'CS301'
    className: { type: String, required: true }, // 'CS301'
    teacherId: { type: String, required: true }, // teacherId
    students: { type: Array, required: true } // array of studentId
  },
  { collection: 'class' }
);

const Class = mongoose.model('ClassSchema', ClassSchema);

module.exports = Class;
