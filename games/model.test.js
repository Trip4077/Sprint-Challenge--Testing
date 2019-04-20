const Games = require('./model');
const db = require('../data/dbConfig');

beforeEach(() => {
    return db('games').truncate();
})

describe('GAMES', () => {
    describe('getAll()', () => {
        it('should return an empty array if no games found', async () => {
            const games = await Games.getAll();

            expect(games).toEqual([]);
        });

        it('should return an array of games in db', async () => {
            const gamesArr = [
                { title: 'Civ V', genre: 'strategy', releaseYear: 2013 },
                { title: 'Civ VI', genre: 'strategy', releaseYear: 2016 }
            ];

            await Games.insert(gamesArr);

            const games = await Games.getAll();

            gamesArr[0].id = 1;
            gamesArr[1].id = 2;
            
            expect(games.length).toBe(2);
            expect(games).toEqual(gamesArr);
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