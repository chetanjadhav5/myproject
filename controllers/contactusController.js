// controllers/contactusController.js
const Contact = require('../models/contactus');
const nodemailer = require('nodemailer');
const CsvParser = require('json2csv').Parser;

const postcontactus = async (req, res) => {
  try {
    const { username, email, message, phoneNO, city } = req.body;

    // Save the contact info to the database
    const contactId = await Contact.create(username, email, phoneNO, city, message);

    res.status(200).json({ message: "Successful", contactId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", err: err.message });
  }
};

const getContactus = async (req, res) => {
  try {
    const contacts = await Contact.getAll();

    const csvfields = ['ID', 'Username', 'Email', 'PhoneNO', 'City', 'Message'];
    const csvparser = new CsvParser({ csvfields });
    const csvdata = csvparser.parse(contacts);

    res.setHeader("Content-type", "text/csv");
    res.setHeader("Content-disposition", "attachment:filename=ContactData.csv");
    res.status(200).end(csvdata);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", err: err.message });
  }
};

module.exports = { postcontactus, getContactus };
