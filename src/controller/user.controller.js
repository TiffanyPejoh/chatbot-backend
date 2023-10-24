const User = require('../model/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user by userId
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postUser = async (req, res) => {
  const user = new User({
    userId: req.body.userId,
    name: req.body.name,
    role: req.body.role,
    phone: req.body.phone
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
    console.log('new user created');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const verifyUser = async (req, res) => {
  try {
    const user = await User.findOne({
      userId: req.body.userId,
      phone: req.body.phone
    });
    const body = {
      userId: user.userId,
      name: user.name,
      role: user.role,
      phone: user.phone
    };
    res.status(200).json(body);
  } catch (error) {
    const body = {
      message: {
        text: 'Nomor HP atau ID tidak ditemukan',
        error: error.message
      }
    };
    res.status(500).json(body);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  verifyUser,
  postUser
};
