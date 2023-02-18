// LIBRARY IMPORTS
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

//set app as an express server
const app = express();

// ADD APP-WIDE MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//require router
const router = require('./routes.js');

// Serve up all static and generated assets
app.use(express.static(path.join(__dirname, '../test')));

app.use('', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
