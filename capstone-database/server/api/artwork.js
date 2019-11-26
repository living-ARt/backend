const router = require('express').Router()
const Artwork = require("../db/models/artwork")

router.get("/", async(req, res, next) => {
  try{
    const allArt = await Artwork.findAll({
      where: {
        museumId: req.body.museumId
      }
    })
    res.json(allArt)
  } catch(err){
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try{
    const art = await Artwork.findByPk(req.params.id)
    res.json(art)
  }catch (err){
    next(err)
  }
})

module.exports = router
