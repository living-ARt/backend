const Sequelize = require('sequelize')
const db = require('../db')

const Museum = db.define('museum', {
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING
  }
})

module.exports = Museum;
