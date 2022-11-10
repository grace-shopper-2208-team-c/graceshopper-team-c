//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const Orders_Product = require('./models/Orders_Product')

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: Orders_Product });
Product.belongsToMany(Order, { through: Orders_Product });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Orders_Product
  },
}
