
const {
  getAllUsersService,
  deactivateUserService,
  activateUserService, 
  getDashboardStatsService,
  getUserTasksService
} = require("../services/userService");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const deactivateUser = async (req, res, next) => {
  try {
    const result = await deactivateUserService(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const activateUser = async (req, res, next) => {
  
  try {
    const result = await activateUserService(req.params.id); // ✅ Use service
    console.log("🔁 HIT /users/:id/activate route", req.params.id);
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(result);
  } catch (err) {
    console.error("Activate User Error:", err);
    next(err); // ✅ Consistent error handling
  }
};

const getDashboardStats = async (req, res, next) => {
  try {
    const stats = await getDashboardStatsService();
    res.json(stats);
  } catch (err) {
    next(err);
  }
};


// const getUserTasks = async (req, res, next) => {
//   try {
//     const tasks = await getUserTasksService(req.params.id);
//     res.json(tasks);
//   } catch (err) {
//     console.error("Error fetching user tasks:", err);
//     next(err);
//   }
// };

const getUserTasks = async (req, res, next) => {
  try {
    console.log("Fetching tasks for user:", req.params.id); // 👈 log user ID
    const tasks = await getUserTasksService(req.params.id);
    console.log("Fetched tasks:", tasks); // 👈 log result
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching user tasks:", err);
    next(err);
  }
};



module.exports = {
  getAllUsers,
  deactivateUser,
  activateUser,
  getDashboardStats,
  getUserTasks
};
