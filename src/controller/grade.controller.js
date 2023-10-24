const Grade = require('../model/grade');

getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all grade by userId
getGradeByUserId = async (req, res) => {
  try {
    const grade = await Grade.find({ userId: req.params.userId });
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all grade by classId
getGradeByClassId = async (req, res) => {
  try {
    const grade = await Grade.find({ classId: req.params.classId });
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get grade by classId and userId
getGradeByClassIdAndUserId = async (req, res) => {
  try {
    const grade = await Grade.findOne({
      classId: req.params.classId,
      userId: req.params.userId
    });
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

postGrade = async (req, res) => {
  const grade = new Grade({
    userId: req.body.userId,
    classId: req.body.classId,
    grade: req.body.grade
  });
  try {
    const newGrade = await grade.save();
    res.status(201).json(newGrade);
    console.log('new grade created');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllGrades,
  getGradeByUserId,
  getGradeByClassId,
  getGradeByClassIdAndUserId,
  postGrade
};
