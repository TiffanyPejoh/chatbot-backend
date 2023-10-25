const Class = require('../model/class');

const getAllClass = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassById = async (req, res) => {
  try {
    const classes = await Class.findOne({ classId: req.params.classId });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassByTeacherId = async (req, res) => {
  try {
    const classes = await Class.find({ teacherId: req.params.teacherId });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postClass = async (req, res) => {
  const classes = new Class({
    classId: req.body.classId,
    className: req.body.className,
    teacherId: req.body.teacherId,
    students: req.body.students
  });
  try {
    const newClass = await classes.save();
    res.status(201).json(newClass);
    console.log('new class created');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllClass,
  getClassById,
  getClassByTeacherId,
  postClass
};
