const Sequelize = require('sequelize')
const db = require('../db')
const DataTypes = require('sequelize/lib/data-types');


const Order = db.define('order', {
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    }  
})

module.exports = Order