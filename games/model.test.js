const Games = require('./model');
const db = require('../data/dbConfig');

describe('GAMES', () => {
    describe('getAll()', () => {
        it('should return an empty array if no games found', async () => {
            const games = await Games.getAll();

            expect(games).toEqual([]);
        });
    });

    describe('insert()', () => {
        it('should insert a game into the db', async () => {
            await Games.insert({ title: 'Civ V', genre: 'strategy', releaseYear: 2013 });

            const games = await Games.getAll();

            expect(games.length).toBe(1);
            expect(games[0].title).toBe('Civ V');
        });
    });
});