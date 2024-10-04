const fs = require('fs');
const path = require('path');

const userDatapath = path.join(__dirname, '../data/users.json');

const loadUsers = () => {
    const data = fs.readFileSync(userDatapath);
    return JSON.parse(data);
};

module.exports = {
    loadUsers,
}