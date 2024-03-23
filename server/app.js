const express = require('express');
require('dotenv').config();
const router = require('./routes/routes');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);
mongoose
.connect(MONGO_URI)
.then(() => {
    app.listen(process.env.PORT);
    console.log(`Database is connected! Listening to ${PORT}`)
}).catch((err) => console.log(err));

