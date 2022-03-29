import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});

describe('testing the resize endpoint', () => {
  it('returns 400 when wrong filename is provided', async () => {
    const response = await request.get(
      '/api/image?filename=sdfsdfe&width=200&height=200'
    );
    expect(response.status).toBe(400);
  });

  it('returns 200 when a valid filname is provided', async () => {
    const reponse = await request.get(
      '/api/image?filename=fjord&width=2040&height=2003'
    );
    expect(reponse.status).toBe(200);
  });
});
