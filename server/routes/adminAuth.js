import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const router = express.Router();

// Admin User Schema (you can move this to a separate models file)
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin" },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

const Admin = mongoose.model("Admin", adminSchema);

// Admin login endpoint
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find admin by email
    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // For development, we'll check plain text password
    // In production, you should use bcrypt.compare for hashed passwords
    const isValidPassword = password === admin.password;
    // const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // In a real application, you'd generate a JWT token here
    const token = `admin_token_${admin._id}_${Date.now()}`;

    res.json({
      success: true,
      message: "Login successful",
      token: token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Create default admin user (for development)
router.post("/create-default", async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({
      email: "admin@jbindustries.com",
    });

    if (existingAdmin) {
      return res.json({
        success: true,
        message: "Default admin already exists",
      });
    }

    const defaultAdmin = new Admin({
      email: "admin@jbindustries.com",
      password: "admin123", // In production, hash this password
      name: "JB Industries Admin",
      role: "admin",
    });

    await defaultAdmin.save();

    res.json({
      success: true,
      message: "Default admin created successfully",
      admin: {
        email: defaultAdmin.email,
        name: defaultAdmin.name,
      },
    });
  } catch (error) {
    console.error("Create admin error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating default admin",
    });
  }
});

export default router;
