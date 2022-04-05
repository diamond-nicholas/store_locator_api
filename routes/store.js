const express = require('express');
const router = express.Router();

const { addStore } = require('../controllers/store');

router.route('/get').get(addStore);

module.exports = router;
