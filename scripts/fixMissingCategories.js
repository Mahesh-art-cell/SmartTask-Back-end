const mongoose = require("mongoose");
const Task = require("../models/Task");
const connectDB = require("../config/connectDB");

const fixMissingCategories = async () => {
  try {
    await connectDB();
    console.log("✅ Connected to DB");

    const result = await Task.updateMany(
      {
        $or: [
          { category: { $exists: false } }, // field missing
          { category: null },               // field is null
          { category: "" }                  // field is empty string
        ]
      },
      { $set: { category: "general" } }
    );

    console.log(`✅ Updated ${result.modifiedCount} task(s)`);
  } catch (error) {
    console.error("❌ Error fixing tasks:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from DB");
  }
};

fixMissingCategories();
