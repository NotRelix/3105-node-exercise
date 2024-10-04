const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');

const router = express.Router();

// End points
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/profile', getProfile);

module.exports = router;