// Create server
const express = require('express');
const app = express();

// Load environment variables
require("dotenv").config();

// Establish and use the router
const userInfoRouter = require('./routes/user-info');

app.get('/', (req, res) => {
    res.send(`Welcome to the server. This team has ${process.env.MAX_ID} member(s).`);
});

app.use('/user-info', userInfoRouter);


// Initialize server 
app.listen(process.env.PORT);