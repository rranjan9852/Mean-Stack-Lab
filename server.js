const express = require('express');
const app = express();
const port = 3100;
app.get('/', (req, res) => res.send("Welcome to the world.This is Rahul Ranjan.Namaste"));
res.send('This is My Mean- Stack subject,which is a acroynm of mango , angular, node.js, express.');
app.listen(port, ()=> console.logo('its working properly'));