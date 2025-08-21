import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.ts";
import adminAuthRoutes from "./routes/adminAuth.js";
import userAuthRoutes from "./routes/userAuth.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const createServer = () => {
  const app = express();

  // ✅ Proper CORS config for local + Netlify
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:8080",
    "http://localhost:8081",
    "https://jbindustries.netlify.app/",
  ];

  app.use(
    cors({
      origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, etc.)
        if (!origin) return callback(null, true);

        // In development, allow any localhost origin
        if (origin && origin.includes("localhost")) {
          return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        } else {
          console.log("CORS blocked origin:", origin);
          return callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    }),
  );

  app.use(express.json());
  app.use("/api/products", productRoutes);
  app.use("/api/admin", adminAuthRoutes);
  app.use("/api/auth", userAuthRoutes);

  return app;
};

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

if (process.env.BUILD !== "true") {
  if (!MONGO_URI) {
    console.error("❌ MONGO_URI is not defined in .env file");
    process.exit(1);
  }

  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("✅ MongoDB Atlas Connected Successfully");
      const app = createServer();
      app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err.message);
    });
}
