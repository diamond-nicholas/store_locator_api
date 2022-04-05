const express = require('express');
const router = express.Router();

const { getStore, addStore } = require('../controllers/store');

router.route('/get').get(getStore);
router.route('/add').post(addStore);

module.exports = router;
