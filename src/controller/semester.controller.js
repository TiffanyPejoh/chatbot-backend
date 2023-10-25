const Semester = require('../model/semester');

const getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.status(200).json(semesters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSemesterById = async (req, res) => {
  try {
    const semester = await Semester.findOne({
      semesterId: req.params.semesterId
    });
    res.status(200).json(semester);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSemesterByUserId = async (req, res) => {
  try {
    const semesters = await Semester.find({ userId: req.params.userId });
    res.status(200).json(semesters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSemesterByClassId = async (req, res) => {
  try {
    const semesters = await Semester.find({ classId: req.params.classId });
    res.status(200).json(semesters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postSemester = async (req, res) => {
  const semester = new Semester({
    semesterYear: req.body.semesterYear,
    semesterNumber: req.body.semesterNumber,
    userId: req.body.userId,
    classId: req.body.classId
  });
  try {
    const newSemester = await semester.save();
    res.status(201).json(newSemester);
    console.log('new semester created');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSemester = async (req, res) => {
  try {
    const semester = await Semester.findOneAndDelete({
      semesterId: req.params.semesterId
    });
    if (!semester) {
      res.status(404).json({ message: 'Semester not found' });
    } else {
      res.status(200).json({ message: 'Semester deleted' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSemesters,
  getSemesterById,
  getSemesterByUserId,
  getSemesterByClassId,
  postSemester,
  deleteSemester
};
