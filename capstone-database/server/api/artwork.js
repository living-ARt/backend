const router = require('express').Router()
const Artwork = require("../db/models/artwork")

router.get("/:id", async (req, res, next) => {
  try{
    const art = await Artwork.findByPk(req.params.id)
    res.json(art)
  }catch (err){
    next(err)
  }
})

module.exports = router
