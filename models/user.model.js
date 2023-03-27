const mongoose = require('mongoose');
const isEmail = require('validator').isEmail;

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: [true, 'Username already exists'],
    min: [5, 'Username must be at least 5 letters long, got {VALUE}'],
    max: [24, 'Username must be maximally 24 letters long, got {VALUE}']
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already exists'],
    validate: [isEmail, 'Invalid email']
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ['USER', 'ADMIN'],
      message: '{VALUE} is not supported'
    }
  }
});

module.exports = mongoose.model('User', userSchema);