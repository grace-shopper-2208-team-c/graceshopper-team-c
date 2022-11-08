const { green, red } = require('chalk');
const { db } = require('./server/db');

const User = require('./server/db/models/User');
const Product = require('./server/db/models/Product');
const Order = require('./server/db/models/Order');

const orders = [{
  "products": { 1: { quantity: 2, price: 2385.33 } },
  "total": 4770.66,
  "date": "2022-11-08",
},
{
  "products": {2: { quantity: 1, price: 8480.99 }},
  "total": 8480.99,
  "date": "2022-11-08",
},
{
  "products": {3: {quantity: 3, price: 8674.19}, 4: {quantity: 2, price: 3409.11}},
  "total": 32840.79,
  "date": "2022-11-08",
},
// {
//   "products": {},
//   "total": 1200.18,
//   "date": "2022-11-08",
//   "isCart": false
// },
// {
//   "products": {},
//   "total": 8422.35,
//   "date": "2022-11-08",
//   "isCart": true
// },
// {
//   "products": {},
//   "total": 422.44,
//   "date": "2022-11-08",
//   "isCart": true
// }
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
  "address": "941 Frank Court, Fairfield, Idaho, 17641",
  "phone": "+1 (991) 400-3821",
  "email": "neldacarney@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Willie Jennings",
  "address": "162 Grand Street, Carrizo, Federated States Of Micronesia, 56270",
  "phone": "+1 (862) 580-2938",
  "email": "williejennings@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Jewel Sparks",
  "address": "611 Ellery Street, Lisco, Indiana, 28425",
  "phone": "+1 (997) 549-2497",
  "email": "jewelsparks@musanpoly.com",
  "password": "default",
  "admin": true
},
{
  "name": "Cristina Contreras",
  "address": "923 Ira Court, Bennett, Oregon, 53723",
  "phone": "+1 (855) 459-3653",
  "email": "cristinacontreras@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Evans Small",
  "address": "146 Tampa Court, Ladera, North Carolina, 38999",
  "phone": "+1 (854) 459-2726",
  "email": "evanssmall@musanpoly.com",
  "password": "default",
  "admin": false
},
{
  "name": "Barker Booker",
  "address": "428 Lawton Street, Ogema, Delaware, 29083",
  "phone": "+1 (852) 585-3198",
  "email": "barkerbooker@musanpoly.com",
  "password": "default",
  "admin": true
}];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(projects.map(project => {
      return Project.create(project);
    }));

    await Promise.all(robots.map(robot => {
      return Robot.create(robot);
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
