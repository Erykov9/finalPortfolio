const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.get('/users/', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);

router.post('/users/', userController.registerUser);

router.delete('/users/:id', userController.deleteUser);

router.put('/users/:id', userController.editUser);

module.exports = router