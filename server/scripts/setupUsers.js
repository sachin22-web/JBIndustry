import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: "user" },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: true },
});

const User = mongoose.model("User", userSchema);

async function setupDefaultUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Create demo users
    const demoUsers = [
      {
        email: "user@example.com",
        password: "user123",
        name: "Demo User",
        role: "user",
      },
      {
        email: "manjeet@jbindustries.com",
        password: "manjeet123",
        name: "Manjeet Singh",
        role: "user",
      },
    ];

    for (const userData of demoUsers) {
      const existingUser = await User.findOne({ email: userData.email });

      if (!existingUser) {
        const newUser = new User(userData);
        await newUser.save();
        console.log(`🎉 Created user: ${userData.email}`);
      } else {
        console.log(`ℹ️  User already exists: ${userData.email}`);
      }
    }

    console.log("\n📋 Available Users:");
    console.log("👤 Email: user@example.com | Password: user123");
    console.log("👤 Email: manjeet@jbindustries.com | Password: manjeet123");
    console.log("👨‍💼 Admin: admin@jbindustries.com | Password: admin123");
    console.log("\n🌐 Login URL: http://localhost:8081/login");
  } catch (error) {
    console.error("❌ Error setting up users:", error);
  } finally {
    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
    process.exit(0);
  }
}

setupDefaultUsers();
