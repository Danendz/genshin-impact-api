import fn_get_data from '@src/controllers/root_controller/functions/fn_get_assets';
import app from '@src/index';
import { fn_api_success_message } from '@shared/functions/fn_api_response';
import request from 'supertest';

describe('GET /', () => {
  const server = app.listen();

  it('Should return names of dirs in assets/data', async () => {
    const expectedResult = fn_api_success_message(await fn_get_data());
    const result = await request(server).get('/');
    expect(result.body).toEqual(expectedResult);
    expect(result.statusCode).toBe(200);
  });

  afterAll((done) => {
    server.close();
    done();
  });
});
