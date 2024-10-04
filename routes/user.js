const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// End points
router.post('/register', registerUser);

module.exports = router;