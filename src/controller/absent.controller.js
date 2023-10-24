const Absent = require('../model/absent');

const getAllAbsent = async (req, res) => {
  try {
    const absents = await Absent.find();
    res.status(200).json(absents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAbsentByUserId = async (req, res) => {
  try {
    const absent = await Absent.find({ userId: req.params.userId });
    res.status(200).json(absent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAbsentByClassId = async (req, res) => {
  try {
    const absent = await Absent.find({ classId: req.params.classId });
    res.status(200).json(absent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAbsentByClassIdAndUserId = async (req, res) => {
  try {
    const absent = await Absent.findOne({
      classId: req.params.classId,
      userId: req.params.userId
    });
    res.status(200).json(absent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postAbsent = async (req, res) => {
  const absent = new Absent({
    userId: req.body.userId,
    classId: req.body.classId,
    absent: req.body.absent
  });
  try {
    const newAbsent = await absent.save();
    res.status(201).json(newAbsent);
    console.log('new absent created');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllAbsent,
  getAbsentByUserId,
  getAbsentByClassId,
  getAbsentByClassIdAndUserId,
  postAbsent
};
