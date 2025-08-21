import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://satykachatgpt:Anilsharma123@jb.1oiazmo.mongodb.net/jb-industries?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB Atlas connected successfully");
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    console.log(
      "⚠️  Continuing without MongoDB. App will use localStorage as fallback.",
    );
    return false;
  }
};

// Handle connection events
mongoose.connection.on("connected", () => {
  console.log("🔗 Mongoose connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error("🚨 Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("🔌 Mongoose disconnected from MongoDB Atlas");
});

// Graceful close on app termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("👋 MongoDB connection closed through app termination");
  process.exit(0);
});
