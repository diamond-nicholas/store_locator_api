const mongoose = require('mongoose');

const store = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, 'Please add a storeID'],
    unique: true,
    trim: true,
    maxlength: [10, 'storeID must be less than 10 characters'],
  },

  address: {
    type: String,
    required: [true, 'Please enter an address'],
  },

  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Array],
      required: '2dsphere',
    },
    formattedAddress: String,
  },

  createdAt: {
    type: Date,
    Default: Date.now,
  },
});

module.exports = mongoose.model('store', store);
