import Todo from "../models/todoModel.js";

// Add a new Todo (Create)
export const addTodo = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = new Todo({
      title,
      description,
      priority,
      dueDate,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json({
      message: "Todo added successfully",
      todo: savedTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all Todos (Read All)
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a single Todo by ID (Read One)
export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a Todo by ID (Update)
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, priority, dueDate, isCompleted } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, priority, dueDate, isCompleted },
      { new: true, runValidators: true } // Returns updated doc & validates data
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a Todo by ID (Delete)
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({
      message: "Todo deleted successfully",
      todo: deletedTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
