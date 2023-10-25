const mongoose = require('mongoose');

const AbsentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // '1234567890'
    classId: { type: String, required: true }, // 'CS301'
    absent: { type: String, required: true }, // 'Present', 'Late', 'Absent
    date: { type: String, required: true } // '2020-12-12'
  },
  { collection: 'absents' }
);

const Absent = mongoose.model('AbsentSchema', AbsentSchema);

module.exports = Absent;
