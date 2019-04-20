const request = require('supertest');
const server = require('./server');

const db = require('../data/dbConfig');

beforeEach(() => {
    return db('games').truncate();
});

describe('SERVER', () => {
    describe('Enviroment', () => {
        it('should set testing environment', () => {
            const env = process.env.DB_ENV;

            expect(env).toBe('testing');
        });

        it('should run on environment port', () => {
            const port = process.env.PORT

            expect(port).not.toBe(undefined);
        });
    });

    describe('GET /games', () => {
        it('should return an empty array when the db is empty', async () => {
            const res = await request(server).get('/games');

            expect(res.body).toEqual([]);
        });
    });
});