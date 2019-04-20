const db = require('../data/dbConfig');

module.exports = {
    insert,
    getAll
}

async function insert(game) {
    return null;
}

async function getAll() {
    return db('games');
}