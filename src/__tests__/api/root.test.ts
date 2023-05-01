import fn_get_data from 'controllers/root_controller/functions/fn_get_data'
import app from 'app/app'
import { fn_api_success_message } from 'shared/functions/fn_api_response'
import request from 'supertest'

describe('GET /', () => {
  const server = app.listen()

  it('Should return names of dirs in assets/data', async () => {
    const expectedResult = fn_api_success_message(await fn_get_data())
    const result = await request(server).get('/')
    expect(result.body).toEqual(expectedResult)
    expect(result.statusCode).toBe(200)
  })

  afterAll((done) => {
    server.close()
    done()
  })
})
