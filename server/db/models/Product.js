const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        unique: false, 
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Product

