const {expect} = require('chai')
const db = require('../index')
const Museum = db.model("museum")

describe("museum model", () => {
  describe("Validations", () => {
    it("requires name", async () => {
      const sampleMuseum = Museum.build({})

      try{
        await sampleMuseum.validate()
        throw Error('validation was successful but should have failed without `name`')
      }catch(err){
        expect(err.message).to.contain('name cannot be null')
      }
    })
    it('requires name to not be an empty string', async () => {
      const sampleMuseum = Museum.build({
        name: '',
      })

      try{
        await sampleMuseum.validate()
        throw Error(
          'validation was successful but should have failed without `name`')
      }catch(err){
        expect(err.message).to.contain('Validation notEmpty on name failed')
      }
    })
  })
})
