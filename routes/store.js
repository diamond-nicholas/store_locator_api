const express = require('express');
const router = express.Router();

const { getStore, addStore, deleteStore } = require('../controllers/store');

router.route('/get').get(getStore);
router.route('/add').post(addStore);
router.route('/delete').delete(deleteStore);

module.exports = router;
