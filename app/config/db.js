const db = require('mysql-promise')();

db.configure({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'nodemysql'
});



module.exports = db;