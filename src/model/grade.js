const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    classId: { type: String, required: true },
    grade: { type: Number, required: true }
  },
  { collection: 'grades' }
);

const Grade = mongoose.model('GradeSchema', GradeSchema);

module.exports = Grade;
