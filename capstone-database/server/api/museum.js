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

module.exports = router
