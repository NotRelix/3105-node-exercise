const bcrypt = require('bcrypt');
const { loadUsers, saveUsers } = require('../models/userModel');

// Register user into users.json if it doesn't exist
const registerUser = (req, res) => {
    const {username, password, email} = req.body;
    const users = loadUsers();

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({message: 'User already exists'});
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {id: users.length + 1, username, password: hashedPassword, email};
    users.push(newUser);
    saveUsers(users);
    
    res.status(201).json({message: 'User registered successfully'});
}

module.exports = {
    registerUser,
}