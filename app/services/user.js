const db = require('../config/db');


const services = {};



services.getUsers = () => {
    return db.query(`SELECT * FROM users`);
}


services.insertUsers = (user) => {
    const { name, age } = user;
    return db.query(`INSERT INTO users(name,age) VALUES ('${name}', '${age}')`);
}

services.updateUser = (id, user) => {
    return db.query(`UPDATE users SET ? WHERE id=${id}`, user);
}


services.deleteUser = (id) => {
    return db.query(`DELETE FROM users WHERE id=${id}`);
}




module.exports = services;