const mongoose = require("mongoose");

const DemoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true
  }
});

const demo = mongoose.model("demo", DemoSchema);

module.exports = demo;