const { green, red } = require('chalk');
const { db } = require('./server/db');

const User = require('./server/db/models/User');
const Product = require('./server/db/models/Product');
const Order = require('./server/db/models/Order');

const orders = [{
  "items": { 1: { quantity: 2, price: 2385.33 } },
  "total": 4770.66,
  "date": "2022-11-08",
},
{
  "items": {2: { quantity: 1, price: 8480.99 }},
  "total": 8480.99,
  "date": "2022-11-08",
},
{
  "items": {3: {quantity: 3, price: 8674.19}, 4: {quantity: 2, price: 3409.11}},
  "total": 32840.79,
  "date": "2022-11-08",
},
];

const products = [{
  "name": "Nike Air Force 1 Low Black",
  "description": "Enim labore sunt cillum ullamco ullamco exercitation labore nisi.",
  "price": 2385.33,
  "quantity": 777,
  "category": "sneakers"
},
{
  "name": "Nike Air Jordan Bred 4",
  "description": "In amet deserunt culpa irure quis amet commodo.",
  "price": 8480.99,
  "quantity": 886,
  "category": "sneakers"
},
{
  "name": "Nike Dunk Low SB Triple White",
  "description": "Ex eu culpa incididunt do enim ut officia laboris magna labore dolore laboris.",
  "price": 8674.19,
  "quantity": 968,
  "category": "sneakers"
},
{
  "name": "Reebok Club C Chalk",
  "description": "Pariatur enim ad deserunt veniam.",
  "price": 3409.11,
  "quantity": 122,
  "category": "sneakers"
},
{
  "name": "Heely",
  "description": "Deserunt non et dolore amet ad commodo nulla cupidatat ex irure laboris proident ut magna.",
  "price": 6730.17,
  "quantity": 773,
  "category": "sneakers"
},
{
  "name": "Adidas Samba Low",
  "description": "Aliquip id pariatur ex consequat reprehenderit ex minim cillum quis deserunt ipsum nostrud.",
  "price": 3522.78,
  "quantity": 108,
  "category": "sneakers"
},
{
  "name": "Nike Air Jordan 1 High Shattered Backboard",
  "description": "Non sint est velit veniam aliquip anim veniam duis quis.",
  "price": 241.86,
  "quantity": 641,
  "category": "sneakers"
}];

const users = [{
  "name": "Nelda Carney",
  "street_address": "941 Frank Court",
  "city": "Fairfield",
  "state":"Idaho",
  "zip": "17641",
  "phone": "+1 (991) 400-3821",
  "username": "nelda",
  "email": "neldacarney@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Willie Jennings",
  "street_address": "162 Grand Street",
  "city": "Carrizo",
  "state":"Federated States Of Micronesia",
  "zip": "56270",
  "phone": "+1 (862) 580-2938",
  "username": "willie",
  "email": "williejennings@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Jewel Sparks",
  "street_address": "611 Ellery Street",
  "city": "Lisco",
  "state":"Indiana",
  "zip": "28425",
  "phone": "+1 (997) 549-2497",
  "email": "jewelsparks@musanpoly.com",
  "username": "jewel",
  "password": "default",
  "admin": true
},
{
  "name": "Cristina Contreras",
  "street_address": "923 Ira Court",
  "city": "Bennett",
  "state":"Oregon",
  "zip": "53723",
  "phone": "+1 (855) 459-3653",
  "username": "cristina",
  "email": "cristinacontreras@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Evans Small",
  "street_address": "146 Tampa Court",
  "city": "Ladera",
  "state":"North Carolina",
  "zip": "38999",
  "phone": "+1 (854) 459-2726",
  "username": "evans",
  "email": "evanssmall@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Barker Booker",
  "street_address": "428 Lawton Street",
  "city": "Ogema",
  "state":"Delaware",
  "zip": "29083",
  "phone": "+1 (852) 585-3198",
  "username": "barker",
  "email": "barkerbooker@musanpoly.com",
  "password": "default",
  "admin": true
}];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(orders.map(order => {
      return Order.create(order);
    }));

    await Promise.all(products.map(product => {
      return Product.create(product);
    }));

    await Promise.all(users.map(user => {
      return User.create(user);
    }));
  } catch (err) {
    console.log(red(err));
  }
};

async function runSeed() {
  try {
    await seed()
    console.log(green('Seeding success!'))
  } catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
  } finally {
    db.close()
  }
};

if (require.main === module) {
  runSeed()
};
