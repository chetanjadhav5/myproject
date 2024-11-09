/// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'iamcj',
    database: 'abc',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
    .then(connection => {
        console.log('Connected to MySQL');
        connection.release();
    })
    .catch(error => {
        console.error('Error connecting to MySQL:', error.message);
    });

module.exports = pool;