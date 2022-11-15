const router = require('express').Router();
const {
  models: { Order },
} = require('../db');

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

//Get all orders by user id
router.get('/userorder/:userId', async (req, res, next) => {
  try {
    const userOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(userOrders);
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
