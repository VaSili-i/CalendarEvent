require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const router = require('./router');


const PORT = process.env.PORT ?? 4001;

app.use(express.json())
app.use(cors())
app.use('/', router)

function start() {
    mongoose.connect('mongodb+srv://user:12345dfcz@cluster0.3cpyo.mongodb.net/JWT_Token?retryWrites=true&w=majority');
    app.listen(PORT, () => console.log(`server is working on:${PORT}`));
}

start()