import app from "../index"
import request from 'supertest'

describe("GET /", () => {
    it("Should return Hello World", async () => {
        const result = await request(app).get("/")
        expect(result.body).toEqual({
            message: "Hello World"
        })
        expect(result.statusCode).toBe(200)
    })

    afterAll((done) => {
        app.close()
        done()
    })
})
