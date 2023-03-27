// EXPRESS //
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// PASSPORT AND STRATEGIES //
const passport = require('passport');


// DB CONNECT //
const dbConnect = require('./db');

// ROUTES //
const users = require('./routes/users.routes');
const auth = require('./routes/auth.routes');

// PORT & DB DATA //
const PORT = process.env.PORT || 8000;
dbConnect();



// SERVER INIT //
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(require("express-session") ({
  secret: 'xyz123456',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/api', users);
app.use('/auth', auth);
app.use(express.static(path.join(__dirname, '/client/build')));

const server = app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
});


app.use(bodyParser.json());

