// routes/todoRoute.js
const express = require("express");
const router = express.Router();
const { createTodoController } = require("../controllers/todoController");

// POST route to create a new todo
router.post("/todos", createTodoController);

module.exports = router;
