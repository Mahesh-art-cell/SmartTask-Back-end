// const Task = require("../../models/Task");

// const getOverdueAndCriticalTasks = async () => {
//   const today = new Date();

//   return await Task.find({
//     dueDate: { $lt: today },
//     status: { $ne: "completed" },
//   });
// };

// module.exports = {
//   getOverdueAndCriticalTasks,
// };
