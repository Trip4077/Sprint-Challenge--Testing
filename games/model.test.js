const Games = require('./model');
const db = require('../data/dbConfig');

describe('GAMES', () => {
    describe('getAll()', () => {
        it('should return an empty array if no games found', async () => {
            const games = await Games.getAll();

            expect(games).toEqual([]);
        });
    });
});