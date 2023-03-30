const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  mongoose
    .connect(
      process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Successfully connected to DATABASE: ' + process.env.DB_URL.split('/')[3])  
  })
  .catch((error) => {
    console.log('Unable to connect to DATABASE');
    console.error(error);
  })
};


module.exports = dbConnect;
