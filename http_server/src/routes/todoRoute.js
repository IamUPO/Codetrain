import express from "express";
import {
  addTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

// Create a new Todo
router.post("/", addTodo);

// Get all Todos
router.get("/", getAllTodos);

// Get a single Todo by ID
router.get("/:id", getTodoById);

// Update a Todo by ID
router.put("/:id", updateTodo);

// Delete a Todo by ID
router.delete("/:id", deleteTodo);

export default router;
