const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const limiter = require('../middleware/rateLimitMiddleware');

const router = express.Router();

// End points
router.post('/register', limiter, registerUser);
router.post('/login', limiter, loginUser);
router.get('/profile', limiter, authMiddleware, getProfile);

module.exports = router;