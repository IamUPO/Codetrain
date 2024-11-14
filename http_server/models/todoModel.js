const mongoose = require("mongoose");

// Mongoose Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  iscompleted: {
    type: Boolean,
    default: false,
  },
});

// Mongoose Model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
