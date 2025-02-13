const express = require('express')
const demo = require('./demo')

const router = express.Router();

router.use('/demo',demo);

module.exports = router;
