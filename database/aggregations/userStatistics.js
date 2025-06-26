// const Task = require("../../models/Task");

// const getUserTaskCount = async (userId) => {
//   const total = await Task.countDocuments({ userId });
//   const completed = await Task.countDocuments({ userId, status: "completed" });

//   return {
//     total,
//     completed,
//     pending: total - completed,
//   };
// };

// module.exports = {
//   getUserTaskCount,
// };
