// controllers/todoController.js
const Todo = require("../models/todoModel");

const createTodoController = async (req, res) => {
  try {
    const { title, description, iscompleted  } = req.body;

    // Create a new Todo document
    const newTodo = new Todo({
      title : title || "No title",
      description : description || "No description",
      iscompleted : iscompleted  || false,
    });

    // Save the new todo
    await newTodo.save();

    // Send response
    res.status(201).json({
      status: "success",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { createTodoController };

