

const mongoose = require("mongoose");
const {seedUsers} = require("./seeders/users")
const connectDB=require("../utils/mongodb")    
const User = require("./models/User");                

const run = async () => {
  await connectDB(); 
  console.log("🔌 DB Name:", mongoose.connection.name); 

  await seedUsers(); 

  const allUsers = await User.find({});
  console.log("📦 All users in DB:", allUsers.map((u) => u.email)); 

  await mongoose.disconnect(); 
};

run();
