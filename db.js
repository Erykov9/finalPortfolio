const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  mongoose
    .connect(
      'mongodb+srv://Erykov9:test123@musicwebsitedb.ihzwpqr.mongodb.net/portfolio?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Successfully connected to DATABASE: ' + 'mongodb+srv://Erykov9:test123@musicwebsitedb.ihzwpqr.mongodb.net/portfolio?retryWrites=true&w=majority'.split('/')[3])  
  })
  .catch((error) => {
    console.log('Unable to connect to DATABASE');
    console.error(error);
  })
};


module.exports = dbConnect;
