const db = require('../data/dbConfig');

module.exports = {
    insert,
    getAll
}

async function insert(game) {
    console.log('game', game);
    const [ id ] = await db('games').insert(game);

    const inserted = await db('games').where({ id });
    
    return inserted[0];
}

async function getAll() {
    return db('games');
}