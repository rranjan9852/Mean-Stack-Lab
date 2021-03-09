// const express = require('express');
// const app = express();
// const port = 3000;
const mongoose = require('mongoose');

// app.listen(port, () => console.log("App Working"))
mongoose.connect('mongodb://localhost/mydb', (error, response) => {
    console.log(">>> Error: ", error);
    console.log(">>> Response: ", response);
})