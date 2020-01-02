const {expect} = require('chai')
const db = require('../index')
const Artwork = db.model("artwork")
const request = require('supertest')
const app = require("../../index")

describe("artwork model", () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe("Default Values", () => {
    beforeEach(()=> {
      Artwork.create({id: 1})
    })

    it("gives a default description, name, artist, and date", async () => {
      const res = await request(app)
        .get('/api/artwork/1')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal("Untitled")
      expect(res.body.artist).to.be.equal("Unknown")
      expect(res.body.date).to.be.equal("No date available")
      expect(res.body.description).to.be.equal("No description available")
      expect(res.body).to.be.an('object')
    })
  })
})
