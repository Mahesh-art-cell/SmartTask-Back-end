// const Task = require("../../models/Task");

// const getTaskCompletionStats = async (userId) => {
//   const last7Days = new Date();
//   last7Days.setDate(last7Days.getDate() - 7);

//   return await Task.aggregate([
//     { $match: { userId, createdAt: { $gte: last7Days } } },
//     {
//       $group: {
//         _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
//         completed: {
//           $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
//         },
//       },
//     },
//     { $sort: { _id: 1 } },
//   ]);
// };

// module.exports = {
//   getTaskCompletionStats,
// };
