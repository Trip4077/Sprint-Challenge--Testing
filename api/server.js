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

server.post('/games', async (req, res) => {
    console.log(req.body)
    const added = await Games.insert(req.body);
    console.log('added', added);
    res.status(201).json(added);
});

module.exports = server;