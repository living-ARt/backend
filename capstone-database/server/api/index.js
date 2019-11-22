const router = require('express').Router()
module.exports = router

router.use("/artwork", require("./artwork"))
router.use("/museum", require("./museum"))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
