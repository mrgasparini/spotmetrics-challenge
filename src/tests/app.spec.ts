import request from 'supertest';
import database from '../config/database';
import app from '../config/config';

describe('GetAllFoods GET - /food', () => {
    test('Return a food array', async (done) => {
        const res = await request(app).get('/food');

        expect(res.status).toEqual(200);
        expect(res.body).not.toContain({});
        done();
    });
});

describe('GetFoofById GET - /food/:id', () => {
    test('Sending wrong ID', async (done) => {
        const id = '23213123';
        const res = await request(app).get(`/food/${id}`);

        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending correctly ID, but not existing', async (done) => {
        const id = '601ae484b106624d6043a73a';
        const res = await request(app).get(`/food/${id}`);

        expect(res.status).toEqual(404);
        done();
    });
});

describe('RegisterFood PUT - /food', () => {
    test('Sending object without Name', async (done) => {
        const food = {
            quantity: 3,
            weight: 20
        };
        const res = await request(app).put(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending object without Quantity', async (done) => {
        const food = {
            name: 'Food name',
            weight: 20
        };
        const res = await request(app).put(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending object without Weight', async (done) => {
        const food = {
            name: 'Food name',
            quantity: 2
        };
        const res = await request(app).put(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });
});

describe('UpdateFood POST - /food', () => {
    test('Sending object without ID', async (done) => {
        const food = {
            name: 'Food name',
            quantity: 3,
            weight: 20
        };
        const res = await request(app).post(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending object with wrong ID', async (done) => {
        const food = {
            id: '1',
            name: 'Food name',
            quantity: 3,
            weight: 20
        };
        const res = await request(app).post(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending correctly ID, but not existing', async (done) => {
        const food = {
            id: '601ae111b306344d7042a73a',
            name: 'Food name',
            quantity: 3,
            weight: 20
        };
        const res = await request(app).post(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending object without Name', async (done) => {
        const food = {
            id: '601ae111b306344d7042a73a',
            quantity: 3,
            weight: 20
        };
        const res = await request(app).post(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending object without Quantity', async (done) => {
        const food = {
            id: '601ae111b306344d7042a73a',
            name: 'Food name',
            weight: 20
        };
        const res = await request(app).post(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending object without Weight', async (done) => {
        const food = {
            id: '601ae111b306344d7042a73a',
            name: 'Food name',
            quantity: 3
        };
        const res = await request(app).post(`/food`).send(food);
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });
});

describe('DeleteFood DELETE - /food', () => {
    test('Sending a wrong ID', async (done) => {
        const id = '1';
        const res = await request(app).delete(`/food/${id}`);

        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        done();
    });

    test('Sending correctly ID, but not existing', async (done) => {
        const id = '601b1c756569f623bc2b7fff';
        const res = await request(app).delete(`/food/${id}`);

        expect(res.status).toEqual(404);
        expect(res.body).toHaveProperty('message');
        done();
    });
});
