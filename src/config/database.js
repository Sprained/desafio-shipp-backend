const path = require('path');

module.exports = {
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'database', 'database.sqlite'),
    host: 'localhost',
    username: 'root',
    password: 'root',
    define: {
        timestamps: false
    }
}