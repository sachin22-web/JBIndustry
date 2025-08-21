import express from "express";
import cors from "cors";
import productsRouter from "../routes/products.js"; // ✅ Add .js if using node

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/products", productsRouter); // ✅ Route mount

  return app;
}
