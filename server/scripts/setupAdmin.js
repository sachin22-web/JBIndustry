import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Admin User Schema
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin" },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

const Admin = mongoose.model("Admin", adminSchema);

async function setupDefaultAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: "admin@jbindustries.com",
    });

    if (existingAdmin) {
      console.log("ℹ️  Default admin already exists:");
      console.log(`   Email: ${existingAdmin.email}`);
      console.log(`   Name: ${existingAdmin.name}`);
      return;
    }

    // Create default admin
    const defaultAdmin = new Admin({
      email: "admin@jbindustries.com",
      password: "admin123", // In production, this should be hashed
      name: "JB Industries Admin",
      role: "admin",
    });

    await defaultAdmin.save();

    console.log("🎉 Default admin created successfully!");
    console.log("📧 Email: admin@jbindustries.com");
    console.log("🔑 Password: admin123");
    console.log("🌐 Login URL: http://localhost:8081/admin/login");
  } catch (error) {
    console.error("❌ Error setting up admin:", error);
  } finally {
    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
    process.exit(0);
  }
}

setupDefaultAdmin();
