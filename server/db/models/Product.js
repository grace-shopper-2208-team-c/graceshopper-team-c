const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    unique: false,
    defaultValue:
      'https://s0.as-img.com/r/pic/lykke/500/500/drawing.png?u=1537641865',
    //allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    unique: false,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
