const Sequelize = require('sequelize')
const db = require('../db')

const Museum = db.define('museum', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  location: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://www.worcesterart.org/events/family/images/family-at-worcester-art-museum.jpg"
  }
})

module.exports = Museum;
