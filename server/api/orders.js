const router = require('express').Router()
const { models: { Order, Orders_Product } } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//Get order by order id
router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.json(order);
  } catch (err) {
    next(err);
  }
});

//Get user order where status is cart
router.get('/cart/:userId', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: "cart"
      }
    });
    res.json(userCart);
  } catch (err) {
    next(err);
  }
})

//Get order products by order id
router.get('/cartProducts/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const orderProducts = await Orders_Product.findAll({
      where: {
        orderId: orderId
      }
    });
    res.json(orderProducts)
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateOrder = await Order.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updateOrder);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const removeOrder = await Order.destroy({ where: { id: req.params.id } });
    res.json(removeOrder);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
