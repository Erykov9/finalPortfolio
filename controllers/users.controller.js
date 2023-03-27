const User = require('../models/user.model.js');
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(error) {
    res.status(500).json({
      message: error
    })
  };
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user) res.status(404).json({
      message: 'User not found!'
    })
    else res.json(user);
  } catch(error) {
    res.status(500).json({
      message: error
    })
  };
};

exports.registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await User.findOne({ username: username });

    if(user) {
      res.status(409).json({message: 'Username already exist'})
    } else {
      const newUser = new User({
        id: uuid(),
        username: username,
        password: await bcrypt.hash(password, 10),
        email: email,
        role: 'USER'
      });
      await newUser.save();
      res.json({
        message: newUser.username + ' has been added successfully!'
      });
    }

  } catch(error) {
    res.status(500).json({
      message: error
    });
  };
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if(!user) res.status(404).json({
      message: 'User not found!'
    })
    else await User.deleteOne({ _id: req.params.id});
    res.json({
      message: 'User deleted!',
      deletedUser: user
    });

  } catch(error) {
    res.status(500).json({
      message: error
    })
  };
};

exports.editUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if(user) {
      const userExist = await User.find({username: username});
      if(userExist.length === 1) {
        res.status(409).json({
          message: 'Username is already in use!'
        })
      } else {
        user.username = username;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        res.json({
          message: username + ' has been edited successfully',
        });
      }
    } else res.status(404).json({
      message: 'User not found!'
    });
  } catch(error) {
    res.status(500).json({
      message: error
    })
  };
}