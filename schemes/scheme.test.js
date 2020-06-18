const db = require('../data/dbConfig.js');
const scheme = require('./scheme-model.js');
const request = require('supertest');
const server = require('../server');

describe('scheme-model', () => {
  describe('add()', () => {
    it('should insert the provided scheme into the db', async () => {
      await scheme.add({ scheme_name: 't3' });
      const schemes = await db('schemes');
      expect(schemes).toHaveLength(7);
    });
  });
  it("should return JSON", async () => {
    const res = await request(server)
      .post("/api/schemes")
      .send({ scheme_name: "t21212"});
      console.log(res.text)
    expect(res.type).toMatch(/json/i);
  });
});

describe('scheme-model', () => {
    describe('delete()', () => {
      it('should remove the provided scheme from the db', async () => {
        await scheme.remove({ scheme_name: 't3' });
        const schemes = await db('schemes');
        expect(schemes).toHaveLength(8);
      });
    });
  });


describe('server.js', () => {
    describe('index route', () => {
        it('should return an OK status code from the index route', async () => {
          const expectedStatusCode = 200;
          const response = await request(server).get('/api/schemes');
          expect(response.status).toEqual(expectedStatusCode);
        });
       });
     });