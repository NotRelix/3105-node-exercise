const bcrypt = require('bcrypt');
const { loadUsers } = require('../models/userModel');

// Register user into users.json if it doesn't exist
const registerUser = (req, res) => {
    const {username, password, email} = req.body;
    const users = loadUsers();

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({message: 'User already exists'});
    }
    const newUser = {id: users.length + 1, username, password, email};
    users.push(newUser);
    res.status(201).json({message: 'User registered successfully'});
}

module.exports = {
    registerUser,
}