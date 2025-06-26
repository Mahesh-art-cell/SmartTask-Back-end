// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// import { seedUsers } from "./seeders/users.js";
// import { seedCategories } from "./seeders/categories.js";
// import { seedTasks } from "./seeders/tasks.js";

// const runSeeders = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("🌱 Connected to DB");
//     await seedUsers();
//     await seedCategories();
//     await seedTasks();
//     console.log("🌱 All seeders done!");
//     process.exit(0);
//   } catch (err) {
//     console.error("Seeder error:", err.message);
//     process.exit(1);
//   }
// };

// runSeeders();



const mongoose = require("mongoose");
const {seedUsers} = require("./seeders/users")
const connectDB=require("../utils/mongodb")    // ✅ adjust path
const User = require("./models/User");                // ✅ required to query users

const run = async () => {
  await connectDB(); // ✅ Connect to the DB
  console.log("🔌 DB Name:", mongoose.connection.name); // ✅ Confirm DB

  await seedUsers(); // ✅ Seed the users

  const allUsers = await User.find({});
  console.log("📦 All users in DB:", allUsers.map((u) => u.email)); // ✅ See inserted users

  await mongoose.disconnect(); // ✅ Clean exit
};

run();
