const router = require('express').Router()
const Museum = require("../db/models/museum")

router.get("/:id", async (req, res, next) => {
  try{
    const museum = await Museum.findByPk(req.params.id)
    res.json(museum)
  }catch (err){
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try{
    const newMuseum = {
      name: req.body.name,
      location: req.body.location
    }
    await Museum.create(newMuseum)
    const createdMuseum = await Museum.findAll({
      where: {
        name: req.body.name,
        location: req.body.location
      }
    })
    res.json(createdMuseum)
  }catch(err){
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try{
    const currentMuseum = await Museum.findByPk(req.params.id)
    const newProperties = {
      name: req.body.name,
      location: req.body.location
    }
    await currentMuseum.update(newProperties)
    res.json(currentMuseum)
  }catch(err){
    next(err)
  }
})

module.exports = router
