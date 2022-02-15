 const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 require('dotenv/config');

/*
 //middleware
 app.use('/posts', () => {
     console.log('This is our security middleware');
 })
*/

 //routes 
 app.get('/', (req, res) => {
     res.send('We are at home');
 })

 app.get('/posts', (req, res) => {
    res.send('We are on post');
})

/*
//Connect to Database 
mongoose.connect('mongosh "mongodb+srv://tylermongodb.rjug5.mongodb.net/myFirstDatabase" --username tshilla', () => {
    console.log('Connected to MongoDB');
});
*/
mongoose.connect(
    process.env.DB_CONNECTION, () => {
        console.log('Connected to MongoDB');
    });

 //Listening Port
 app.listen(8500);
