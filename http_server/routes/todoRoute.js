const express = require("express");
const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
} = require("../controller/todoController");

const router = express.Router();

// Get all todos and create a new todo
router.route("/todos")
    .get(getAllTodos)
    .post(createTodo);

// Get, update, delete, and patch a todo by ID
router.route("/todos/:id")
    .get(getTodoById)
    .put(updateTodo) 
    .delete(deleteTodo);

module.exports = router;
