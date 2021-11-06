const router = require('express').Router();
const { isLoggedIn } = require('../middlewares/authorization'); // middleware require if used here

// example of a private route
// we can add the middleware here or do it in index.js in case all files will need that authorization
router.get("/", (req, res, next) => {

// example of accessing private information from DB
const privateData = { message: "this is your private information" }

res.status(200).json(privateData) // send the data with a 200 message
})

module.exports = router;