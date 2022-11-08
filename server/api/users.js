
const router = require('express').Router()
const { models: { User }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, { where: { id: req.params.id} })
    res.json(updateUser)
  }
  catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
  }
  catch (err){
    next(err);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const remvoeUser = await User.destroy({ where: { id: req.params.id } })
    res.json(removeUawe)
  }
  catch (err) {
    console.log(err)
  }
})

module.exports = router
