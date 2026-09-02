const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("../data/seedProducts");

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("Clearing existing products...");

    await Product.deleteMany();

    console.log("Adding seed products...");

    await Product.insertMany(products);

    console.log("Database seeded successfully!");
    console.log(`${products.length} products added.`);

    process.exit(0);
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`);

    process.exit(1);
  }
};

seedDatabase();