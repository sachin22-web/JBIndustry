import express from "express";
import { createProduct, getAllProducts } from "../controllers/ProductController.js";

const router = express.Router();

// Route to add a new product
router.post("/", createProduct);

// Route to get all products
router.get("/", getAllProducts);

export default router;
