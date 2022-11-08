<<<<<<< HEAD
const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
=======
const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', require('./orders'))

router.get('/', (req, res, next) => {
  res.send('All routes in here start with /api')
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
>>>>>>> 9d69799ab8c44e72e75edfa4dfad4c835957840b
