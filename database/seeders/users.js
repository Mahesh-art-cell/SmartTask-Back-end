
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const seedUsers = async () => {
  await User.deleteMany({});

  const hashedPassword = await bcrypt.hash("password123", 10);

  const users = [
    {
      fullName: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      isActive: true,
    },
    {
      fullName: "Mahesh Talluri",
      email: "mahesh@example.com",
      password: await bcrypt.hash("123456", 10),
      role: "user",
      isActive: true,
    },
  ];

  await User.insertMany(users);
  console.log("✅ Users seeded");
};

module.exports = { seedUsers };
