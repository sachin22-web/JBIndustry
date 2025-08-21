// server/routes/products.ts
import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductStats,
} from "../controllers/ProductController.js";

const router = express.Router();

// Specific routes MUST come before parameterized routes
router.get("/stats", getProductStats);
router.get("/category/:category", getProductsByCategory);

// General CRUD routes
router.get("/", getAllProducts);
router.post("/", createProduct);

// Parameterized routes (these must come last)
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
