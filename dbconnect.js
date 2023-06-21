const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/jenkins';
mongoose.connect(url);
console.log("MongoDB connected to Nodejs");

