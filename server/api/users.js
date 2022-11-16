const router = require('express').Router();
const {
  models: { User },
} = require('../db');

const authAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  const currentUser = await User.findByToken(token);

  req.user = currentUser;
  if (currentUser.dataValues.isAdmin) {
    next();
  } else {
    const error = new Error('Not an Admin gg nub');
    error.status = 401;
    next(error);
  }
};

router.get('/', authAdmin, async (req, res, next) => {
  const user = req.user;
  if (user.dataValues.isAdmin === true) {
    try {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email', 'username'],
      });
      res.json(users);
    } catch (err) {
      next(err);
    }
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'email', 'username'],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updateUser);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const removeUser = await User.destroy({ where: { id: req.params.id } });
    res.json(removeUser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
