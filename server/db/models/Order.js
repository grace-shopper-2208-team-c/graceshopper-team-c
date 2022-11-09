const Sequelize = require('sequelize')
const db = require('../db')
const DataTypes = require('sequelize/lib/data-types');


const Order = db.define('order', {
    customerId: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true
    },
    items: {
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