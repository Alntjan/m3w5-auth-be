const router = require('express').Router();
const authRoutes = require('./auth.routes');
const privateRoutes = require("./private.routes")
const { isLoggedIn } = require('../middlewares/authorization'); // middleware require if used here

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

// You put the next routes here 👇
// example:
router.use('/auth', authRoutes);
// we can add the middleware here or do it in private.routes.js in case only some routes will need the authorization
router.use("/private", isLoggedIn, privateRoutes);

module.exports = router;
