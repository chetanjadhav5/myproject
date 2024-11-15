const express = require('express');
const router = express.Router();
const { postcontactus, getContactus,testing } = require('../controllers/contactusController');

// Define the route for handling contact form submissions
router.post('/', postcontactus);
router.get('/getContactus', getContactus);
router.get('/test/api',testing)
module.exports = router;