const Task = require("../../models/Task");
const User = require("../../models/User");

const seedTasks = async () => {
  const user = await User.findOne({ email: "john@example.com" });

  if (!user) {
    console.log("⚠️ User not found. Make sure to seed users before tasks.");
    return;
  }

  const tasks = [
    {
      title: "Finish project",
      description: "Complete the frontend by Friday",
      category: "Work",
      dueDate: new Date(),
      status: "pending",
      userId: user._id,
    },
    {
      title: "Buy groceries",
      description: "Get milk, bread, eggs",
      category: "Personal",
      dueDate: new Date(),
      status: "completed",
      userId: user._id,
    },
  ];

  await Task.insertMany(tasks);
  console.log("✅ Tasks seeded");
};

module.exports = { seedTasks };
