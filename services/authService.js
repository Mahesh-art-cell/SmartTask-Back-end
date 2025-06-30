const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerService = async ({ fullName, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword,
    role: role || "user", 
  });

  const token = jwt.sign(
    { id: newUser._id, role: newUser.role }, 
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user: newUser, token };  
};



const loginService = async ({ email, password }) => {
  console.log("📩 Login email:", email);

  const user = await User.findOne({ email: new RegExp(`^${email}$`, "i") });

  if (!user) {
    console.log("❌ User not found");
    throw new Error("Invalid credentials");
  }

  if (!user.isActive) {
    console.log("User is not active");
    throw new Error("Invalid credentials");
  }

  console.log("User found:", user.email);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("Password mismatch");
    console.log("Entered:", password);
    console.log("Stored Hash:", user.password);
    throw new Error("Invalid credentials");
  }

  console.log("Password matched");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  return { user, token };
};




module.exports = {
  registerService,
  loginService,
};
