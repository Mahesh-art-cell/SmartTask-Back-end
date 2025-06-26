

// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    // category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // if using references
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
  },
  { timestamps: true }
);

// ✅ THIS LINE is critical
module.exports = mongoose.model("Task", taskSchema);
