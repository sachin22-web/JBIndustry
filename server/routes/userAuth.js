import express from "express";
import User from "../models/User.js";

const router = express.Router();

// User registration endpoint
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and name are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Create new user
    const newUser = new User({
      email: email.toLowerCase(),
      password: password, // In production, hash this password
      name: name,
      role: "user",
    });

    await newUser.save();

    // Generate token (simple for now)
    const token = `user_token_${newUser._id}_${Date.now()}`;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: token,
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("User registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// User login endpoint
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

    // Find user by email
    const user = await User.findOne({
      email: email.toLowerCase(),
      isActive: true,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check password (plain text for development)
    const isValidPassword = password === user.password;

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = `user_token_${user._id}_${Date.now()}`;

    res.json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    console.error("User login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get user profile
router.get("/profile", async (req, res) => {
  try {
    // Simple token validation (extract user ID from token)
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // Extract user ID from token (simple approach)
    const userIdMatch = token.match(/user_token_([a-f0-9]+)_/);
    if (!userIdMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    const userId = userIdMatch[1];
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
