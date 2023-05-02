import fn_get_schema from '@controllers/schema_controller/functions/fn_get_schema'
import app from '@app/app'
import { fn_api_error_message, fn_api_success_message } from '@shared/functions/fn_api_response'
import request from 'supertest'

describe('Get /schema', () => {
  const server = app.listen()

  it('Should return all schemas', async () => {
    const expectedResult = fn_api_success_message(await fn_get_schema())
    const result = await request(server).get('/schema')
    expect(result.body).toEqual(expectedResult)
    expect(result.statusCode).toEqual(200)
  })

  afterAll((done) => {
    server.close()
    done()
  })
})

describe('Get /schema/:name', () => {
  const server = app.listen()
  const url = '/schema'

  it('Should return schema', async () => {
    const allSchemas = await fn_get_schema()
    const schemaName = allSchemas[0]

    let expectedSchema = fn_api_success_message({})

    if (allSchemas.length !== 0) {
      expectedSchema = fn_api_success_message(await fn_get_schema(schemaName))
    }

    const result = await request(server).get(`/schema/${schemaName}`)

    expect(result.body).toEqual(expectedSchema)
    expect(result.statusCode).toEqual(200)
  })

  it('Should return error, because schema is not exists', async () => {
    const schemaName = 'test'
    const expectedSchema = fn_api_error_message('')
    const result = await request(server).get(`${url}/${schemaName}`)
    expect(result.statusCode).toBe(404)
    expect(result.body?.type).toBe(expectedSchema.type)
  })

  afterAll((done) => {
    server.close()
    done()
  })
})

