const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

// Check for user in users.json if it exists
const loginUser = (req, res) => {
    const {username, password} = req.body;
    const users = loadUsers();

    const user = users.find(user => user.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.send(401).json({message: 'Invalid credentials'});
    }

    const token = jwt.sign({id: user.id}, 'secrettoken', {expiresIn: '1h'});
    // console.log(token);
    res.json({token});
}

// Shows your personal information
const getProfile = (req, res) => {
    const userId = req.user.id;
    const users = loadUsers();
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.json({username: user.username, password: user.password, email: user.email});
}

module.exports = {
    registerUser,
    loginUser,
    getProfile,
}