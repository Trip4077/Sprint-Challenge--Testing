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
        it('should return an array', async () => {
            const res = await request(server).get('/games');

            expect(typeof res.body).toBe('object');
        });

        it('should return status 200 OK', async () => {
            const res = await request(server).get('/games');

            expect(res.status).toBe(200);
        });

        it('should return a json packet', async () => {
            const res = await request(server).get('/games');

            expect(res.type).toBe('application/json');
        });
    });
});