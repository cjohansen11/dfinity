const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  animal: {
    type: String,
    enum: ['cat', 'dog', 'bird', 'ferret', 'fish'],
    required: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: false,
    lowercase: true,
  },
  owner: {
    type: String,
    required: false,
    lowercase: true,
  },
  microchipped: {
    type: Boolean,
    required: true,
    lowercase: true,
  },
});

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
