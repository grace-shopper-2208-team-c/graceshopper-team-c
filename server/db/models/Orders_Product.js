const Sequelize = require('sequelize')
const db = require('../db')
const DataTypes = require('sequelize/lib/data-types');


const Orders_Product = db.define('orders_products', {
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    }  
})

module.exports = Orders_Product