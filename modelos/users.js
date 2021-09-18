const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');
const data = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const users = {
    fetchUsers: () => {
        return data
    },

    modifyData: (data) => {
        fs.writeFileSync(usersPath, JSON.stringify(data))
    },

    findUserByID: (id) => {
        return data.find(userID => String(userID.id) == id)
    },

    
}

module.exports = users;