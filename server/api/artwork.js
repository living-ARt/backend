const router = require('express').Router()
const Artwork = require("../db/models/artwork")

//this gets all artwork in our entire database
router.get("/", async(req, res, next) => {
  try{
    const allArt = await Artwork.findAll()
    res.json(allArt)
  } catch(err){
    next(err)
  }
})

//this gets just one artwork
router.get("/:id", async (req, res, next) => {
  try{
    const art = await Artwork.findByPk(req.params.id)
    res.json(art)
  }catch (err){
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try{
    const newArt = {
      name: req.body.name,
      artist: req.body.artist,
      date: req.body.date,
      imageUrl: req.body.imageUrl,
      videoUrl: req.body.videoUrl,
      description: req.body.description,
      descriptionSound: req.body.descriptionSound,
      museumId: req.body.museumId //added this line, needs to be committed, pushed, and deployed
    }
    await Artwork.create(newArt)
    const createdArt = await Artwork.findAll({
      where: {
        name: req.body.name,
        artist: req.body.artist
      }}
      )
    res.json(createdArt)
  }catch(err){
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try{
    const currentArt = await Artwork.findByPk(req.params.id)
    const newProperties = {
      name: req.body.name,
      artist: req.body.artist,
      date: req.body.date,
      imageUrl: req.body.imageUrl,
      videoUrl: req.body.videoUrl,
      description: req.body.description,
      descriptionSound: req.body.descriptionSound,
      museumId: req.body.museumId
    }
    await currentArt.update(newProperties)
    res.json(currentArt)
  }catch(err){
    next(err)
  }
})

module.exports = router
