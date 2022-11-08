const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    customerId: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    products: {
        type: DataTypes.JSON,
        allowNull: false
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    isCart: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    
})

module.exports = Order