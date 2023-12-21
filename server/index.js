const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT | 3001;
const app = express();
const DB = "mongodb+srv://krrathor226:M5PdL2kKlDQZI3Il@cluster0.hpayxzg.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>{
    console.log('connected to the database');
}).catch((err)=>{
    console.log(`connection error: ${err}`);
});

app.listen(PORT, "0.0.0.0",()=>{
    console.log(`connected at port ${PORT}`)
});


