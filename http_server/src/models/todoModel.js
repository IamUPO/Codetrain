import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: {
      type: Date, 
    },
    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

todoSchema.pre("save", function (next) {
  if (this.isCompleted && !this.completedAt) {
    this.completedAt = new Date();
  }
  next();
});

// Mongoose Model
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
