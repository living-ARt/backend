const {expect} = require('chai')
const db = require('../db')
const request = require('supertest')
const Artwork = db.model("artwork")
const app = require("../index")

describe("Artwork routes", () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe("/api/artwork/:id", () => {
    const sampleArt = {
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      id: 2,
    }

    beforeEach(() => {
      return Artwork.create(sampleArt)
    })

    it("GET api/artwork/:id", async () => {
      const res = await request(app)
        .get('/api/artwork/2')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal(sampleArt.name)
    })
  })
})
