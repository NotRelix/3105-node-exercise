const fs = require('fs');
const path = require('path');

const userDatapath = path.join(__dirname, '../data/users.json');

const loadUsers = () => {
    const data = fs.readFileSync(userDatapath);
    return JSON.parse(data);
};

const saveUsers = (users) => {
    console.log(`Saving users to: ${userDatapath}`);
    fs.writeFileSync(userDatapath, JSON.stringify(users, null, 2));
};

module.exports = {
    loadUsers,
    saveUsers,
}