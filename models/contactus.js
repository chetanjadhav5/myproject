// models/Contact.js
const db = require('../db');

const Contact = {};

Contact.create = async(username, email, phoneNO, city, message) => {
    try {
        const connection = await db.getConnection();
        const [result] = await connection.execute(
            'INSERT INTO contacts (username, email, phoneNO, city, message) VALUES (?, ?, ?, ?, ?)', [username, email, phoneNO, city, message]
        );
        connection.release();
        return result.insertId;
    } catch (error) {
        throw new Error(`Error creating contact: ${error.message}`);
    }
};

Contact.getAll = async() => {
    try {
        const connection = await db.getConnection();
        const [rows] = await connection.execute('SELECT * FROM contacts');
        connection.release();
        return rows;
    } catch (error) {
        throw new Error(`Error getting contacts: ${error.message}`);
    }
};

module.exports = Contact;