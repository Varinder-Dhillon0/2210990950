const express = require('express');
const router = express.Router();
const { getTopUsers } = require('../controllers/users');

router.get('/', getTopUsers);
module.exports = router;
