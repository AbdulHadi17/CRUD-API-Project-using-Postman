const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/route.js');


//setting up the app
const app = express();

//port
const port = 3000;


//middleware
app.use(express.json());
app.use('/api/products',productRouter);

// Basic Get Request
app.get('/', (req, res) => {
    res.send("Welcome to Home Page of CRUD Project");
})




// Connecting Database and Listening our Express App

mongoose.connect("mongodb+srv://abdulhadi:shLqVDpDjfX4ZyEM@hadidb.gr2xkvq.mongodb.net/Products").then(() => {
    console.log("Connected to Database")

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })

}).catch(() => {
    console.log("Connection Failed");
})

