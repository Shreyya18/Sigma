const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const { Employee } = require('./mongo.js');

let conn= await mongoose.connect("mongodb://localhost:27017/employee")

const app = express();
const port = 3000;

//make public folder static
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/index', (req, res) => {
    res.sendFile('templates/index.html', { root: __dirname })
    // res.send(__dirname)
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})