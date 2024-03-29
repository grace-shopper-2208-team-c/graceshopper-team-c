const router = require('express').Router();
const {
  models: { Product },
} = require('../db');

//All product get
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//Single product get
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateProduct = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updateProduct);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const removeProduct = await Product.findByPk(req.params.id);
    await removeProduct.destroy();
    res.json(removeProduct);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
