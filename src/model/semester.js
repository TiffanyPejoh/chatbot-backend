const mongoose = require('mongoose');

const SemesterSchema = new mongoose.Schema(
  {
    semesterYear: { type: String, required: true }, // '2020-2021'
    semesterNumber: { type: String, required: true }, // '1'
    userId: { type: String, required: true }, // '1234567890'
    classId: { type: String, required: true } // 'CS301'
  },
  { collection: 'semester' }
);

const Semester = mongoose.model('SemesterSchema', SemesterSchema);

module.exports = Semester;
