require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
const clienteId = process.env.CLIENT_ID || 'Not-Found enviroment variable';
const clienteSecret = process.env.CLIENT_SECRET || 'Not-Found enviroment variable';
const redirectURL = process.env.REDIRECT_URL || 'Not-Found enviroment variable'; 

const AssesToken = '';

app.use(bodyParser.json());
app.use(cors());


function handleLogin(){
    
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`API run in port: ${port}`);
});