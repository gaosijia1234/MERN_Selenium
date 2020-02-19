const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()

// create express server 
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());

// connect to db 
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log(err));

// connect to the routes 
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// this tells the server what the routes are going to be using 
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});





