'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Server Tests', () => {
  describe('error handler tests', () => {
    test('404 on a bad route', async() => {
      let response = await request.get('/fakeroute');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual(('404 error not found'));
    });

    test('404 on a bad method', async () => {
      let response = await request.post('/person');
      expect(response.status).toEqual(404);
    });

    test('500 if no name is in the query string', async () => {
      let response = await request.get('/person');
      expect(response.status).toEqual(500);
      expect(response.text).toEqual('Please enter a name query parameter like this: /person?name=beau');
    });
  });

  describe('GET route tests', () => {
    test('/person route works with query parameter', async () => {
      let response = await request.get('/person?name=beau');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual(`Personal Greetings beau`);
    });
    test('/person/name route works with a provided name', async () => {
      let response = await request.get('/person/winston');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual(`Hello winston, from us personally`);
    });
  });
});