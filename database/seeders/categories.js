const Category = require("../../models/Category");

const seedCategories = async () => {
  const categories = [
    { name: "Work", description: "Work-related tasks" },
    { name: "Personal", description: "Personal errands" },
    { name: "Health", description: "Health and fitness goals" },
  ];

  await Category.insertMany(categories);
  console.log("✅ Categories seeded");
};

module.exports = { seedCategories };
