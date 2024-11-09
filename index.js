const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3008;

app.use(express.json());

const contactusRouter = require('./routes/contactusRouter');
app.use('/contactus', contactusRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
