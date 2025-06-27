


// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const connectDB = require("./utils/mongodb");
// const errorHandler = require("./middleware/errorHandler");

// // Route imports
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/users");
// const taskRoutes = require("./routes/tasks");
// const adminRoutes = require("./routes/admin");
// const exportRoutes = require("./routes/export");

// // Load env variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// // Create Express app
// const app = express();

// // Allowed frontend origins
// const allowedOrigins = [
//   "http://localhost:5173", 
//   "https://smart-task-front-end.vercel.app"
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(morgan("dev"));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/export", exportRoutes);

// // Health check
// app.get("/", (req, res) => {
//   res.send("✅ Smart Task Management API is running...");
// });

// // Global error handler
// app.use(errorHandler);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });




const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./utils/mongodb");
const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const adminRoutes = require("./routes/admin");
const exportRoutes = require("./routes/export");

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://smart-task-front-end.vercel.app"
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ⬅ handles preflight

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/export", exportRoutes);

app.get("/", (req, res) => {
  res.send("✅ Smart Task Management API is running...");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
