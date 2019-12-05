const Sequelize = require('sequelize')
const db = require('../db')

const Artwork = db.define('artwork', {
  name: {
    type: Sequelize.STRING,
    defaultValue: "Untitled"
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  gifUrl: {
    type: Sequelize.STRING
  },
  artist: {
    type: Sequelize.STRING,
    defaultValue: "Unknown"
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "No description available"
  },
  date: {
    type: Sequelize.STRING,
    defaultValue: "No date available"
  },
  descriptionSound: {
    type: Sequelize.STRING,
  },
  VRUrl:{
    type: Sequelize.STRING
  },
  physicalWidth: {
    type: Sequelize.DECIMAL
  },
  location: {
    type: Sequelize.STRING
  }
})

module.exports = Artwork
