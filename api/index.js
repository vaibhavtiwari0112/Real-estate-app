const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log(`Connected to database`);
}).catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log(`server running on 3000`)
})