const express = require('express')
const db = require('./db')
const app = express()
const morgan = require('morgan')
const path = require('path')
// const compression = require('compression')
const PORT = process.env.PORT || 8080
module.exports = app


const createApp = () => {
  app.use(morgan('dev'))

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use('/api', require('./api'))

  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}
//////

const syncDb = () => db.sync()

const startListening = () => {
  db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  })
}

async function bootApp() {
  await syncDb()
  await createApp()
  await startListening()
}

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
