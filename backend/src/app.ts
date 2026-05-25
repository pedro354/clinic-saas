const cors = require('cors');
const apiRouter = require('./routes/api');
const express = require('express');

const app = express()

app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api', apiRouter)

module.exports = app;