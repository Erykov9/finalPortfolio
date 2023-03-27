const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/users.controller');
const auth = require('../authMiddleware');

router.post('/login', authController.login);
router.get('/stuff', auth, userController.getAllUsers);

module.exports = router
