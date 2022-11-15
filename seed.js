const { green, red } = require('chalk');
const { db } = require('./server/db');

const User = require('./server/db/models/User');
const Product = require('./server/db/models/Product');
const Order = require('./server/db/models/Order');
const Orders_Product = require('./server/db/models/Orders_Product');

const orders = [
  {
    total: 20371.09,
    date: '2022-11-08',
    status: 'complete'
  },
  {
    total: 60571.53,
    date: '2022-11-08',
    status: 'complete'
  },
];

const products = [
  {
    name: 'Nike Air Force 1 Low Black',
    description:
      'Enim labore sunt cillum ullamco ullamco exercitation labore nisi.',
    image:
      'https://cdn.shopify.com/s/files/1/0415/3753/6151/products/4_224d50b3-1941-4428-90e1-3fad52c5f636_2400x.jpg?v=1644585355',
    price: 2385.33,
    quantity: 777,
    category: 'sneakers',
  },
  {
    name: 'Nike Air Jordan Bred 4',
    description: 'In amet deserunt culpa irure quis amet commodo.',
    image:
      'https://www.kicksonfire.com/wp-content/uploads/2019/04/nike-air-jordan-4-bred-2019-1.jpg',
    price: 8480.99,
    quantity: 886,
    category: 'sneakers',
  },
  {
    name: 'Nike Dunk Low SB Triple White',
    description:
      'Ex eu culpa incididunt do enim ut officia laboris magna labore dolore laboris.',
    image:
      'https://sneakernews.com/wp-content/uploads/2021/06/Nike-Dunk-Low-Triple-White-2021-2.jpeg?w=1140',
    price: 8674.19,
    quantity: 968,
    category: 'sneakers',
  },
  {
    name: 'Reebok Club C Chalk',
    description: 'Pariatur enim ad deserunt veniam.',
    image:
      'https://media.endclothing.com/media/catalog/product/1/0/10-05-2022_LL_GX3683_1_1.jpg',
    price: 3409.11,
    quantity: 122,
    category: 'sneakers',
  },
  {
    name: 'Heely',
    description:
      'Deserunt non et dolore amet ad commodo nulla cupidatat ex irure laboris proident ut magna.',
    image: 'https://m.media-amazon.com/images/I/71JEGKxA4CL._AC_SL1500_.jpg',
    price: 6730.17,
    quantity: 773,
    category: 'sneakers',
  },
  {
    name: 'Adidas Samba Low',
    description:
      'Aliquip id pariatur ex consequat reprehenderit ex minim cillum quis deserunt ipsum nostrud.',
    image:
      'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_87b60327-9e9f-4885-817c-8c1ce51d916c_460x.jpg?v=1656270523',
    price: 3522.78,
    quantity: 108,
    category: 'sneakers',
  },
  {
    name: 'Nike Air Jordan 1 High Shattered Backboard',
    description: 'Non sint est velit veniam aliquip anim veniam duis quis.',
    image:
      'https://www.modern-notoriety.com/wp-content/uploads/2015/06/shattered-backboard-jordan-1-release-date-2_result.jpg',
    price: 241.86,
    quantity: 641,
    category: 'sneakers',
  },
];

const users = [
  {
    name: 'Nelda Carney',
    street_address: '941 Frank Court',
    city: 'Fairfield',
    state: 'Idaho',
    zip: '17641',
    phone: '991-400-3821',
    username: 'nelda',
    email: 'neldacarney@musanpoly.com',
    password: 'default',
    admin: false,
  },
  {
    name: 'Willie Jennings',
    street_address: '162 Grand Street',
    city: 'Carrizo',
    state: 'Federated States Of Micronesia',
    zip: '56270',
    phone: '862-580-2938',
    username: 'willie',
    email: 'williejennings@musanpoly.com',
    password: 'default',
    admin: false,
  },
  {
    name: 'Jewel Sparks',
    street_address: '611 Ellery Street',
    city: 'Lisco',
    state: 'Indiana',
    zip: '28425',
    phone: '997-549-2497',
    email: 'jewelsparks@musanpoly.com',
    username: 'jewel',
    password: 'default',
    admin: true,
  },
  {
    name: 'Cristina Contreras',
    street_address: '923 Ira Court',
    city: 'Bennett',
    state: 'Oregon',
    zip: '53723',
    phone: '855-459-3653',
    username: 'cristina',
    email: 'cristinacontreras@musanpoly.com',
    password: 'default',
    admin: false,
  },
  {
    name: 'Evans Small',
    street_address: '146 Tampa Court',
    city: 'Ladera',
    state: 'North Carolina',
    zip: '38999',
    phone: '854-459-2726',
    username: 'evans',
    email: 'evanssmall@musanpoly.com',
    password: 'default',
    admin: false,
  },
  {
    name: 'Barker Booker',
    street_address: '428 Lawton Street',
    city: 'Ogema',
    state: 'Delaware',
    zip: '29083',
    phone: '852-585-3198',
    username: 'barker',
    email: 'barkerbooker@musanpoly.com',
    password: 'default',
    admin: true,
  },
];

const orders_products = [
  {
    orderId: 1,
    productId: 2,
    quantity: 2,
    price: 8480.99,
  },
  {
    orderId: 1,
    productId: 3,
    quantity: 1,
    price: 3409.11,
  },
  {
    orderId: 2,
    productId: 6,
    quantity: 9,
    price: 6730.17,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      orders.map((order) => {
        return Order.create(order);
      })
    );

    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    await Promise.all(
      orders_products.map((order_product) => {
        return Orders_Product.create(order_product);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

async function runSeed() {
  try {
    await seed();
    console.log(green('Seeding success!'));
  } catch (err) {
    console.error(red('Oh noes! Something went wrong!'));
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
