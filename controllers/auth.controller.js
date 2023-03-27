const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      username: username
    });

    if(!user) {
      res.status(409).json({
        message: 'Username or password are incorrect!'
      })
    } else {
      if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          {
            userId: user._id,
            userName: user.username
          },
          "RANDOM-TOKEN",
          {
            expiresIn: "24h"
          }
        );

        res.status(200).json({
          message: 'Login successful',
          username: user.username,
          token
        })
      } else {
        res.status(409).json({
          message: 'Username or password are incorrect!'
        })
      }
    }
  } catch(error) {
    res.status(500).json({
      message: error
    })
  }
}
