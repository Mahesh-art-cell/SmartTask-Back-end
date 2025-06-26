// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// // const connectDB = require("./config/mongodb");
// const connectDB= require("./utils/mongodb")
// const { errorHandler } = require("./middleware/errorHandler");

// // Routes
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/users");
// const taskRoutes = require("./routes/tasks");
// const adminRoutes = require("./routes/admin");
// const exportRoutes = require("./routes/export");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// // Use routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/export", exportRoutes);

// app.get("/", (req, res) => {
//   res.send("✅ Smart Task Management API is running...");
// });

// app.use(errorHandler);

// module.exports = app;
