const {expect} = require('chai')
const db = require('../db')
const request = require('supertest')
const Museum = db.model("museum")
const app = require("../index")

describe("Museum routes", () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe("/api/museum/:id", () => {
    const sampleMuseum = {
      name: "The Louvre",
      location: "Paris, France",
      id: 1,
    }

    beforeEach(() => {
      return Museum.create(sampleMuseum)
    })

    it("GET api/museum/:id", async () => {
      const res = await request(app)
        .get('/api/museum/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal(sampleMuseum.name)
    })
  })
})
