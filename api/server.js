const express = require('express');
const server = express();

const Games = require('../games/model');

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'running' });
});

server.get('/games', async (req, res) => {
    const games =  await Games.getAll();

    res.status(200).json(games);
});

module.exports = server;