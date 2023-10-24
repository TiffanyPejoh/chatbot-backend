const mongoose = require('mongoose');

const AbsentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    classId: { type: String, required: true },
    absent: { type: String, required: true }
  },
  { collection: 'absents' }
);

const Absent = mongoose.model('AbsentSchema', AbsentSchema);

module.exports = Absent;
