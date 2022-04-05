const mongoose = require('mongoose');

const store = new mongoose.Schema({
  name: String,
  address: String,
});

module.exports = mongoose.model('store', store);
