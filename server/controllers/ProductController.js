import Product from "../models/Product.js";

// 🟢 Add New Product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    // Add id field for frontend compatibility
    const productWithId = {
      ...product.toObject(),
      id: product._id.toString(),
    };
    res.status(201).json({ success: true, data: productWithId }); // 👈 Fixed format
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Add this inside productController.ts or .js
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // Assuming you have Product model:
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

// 🔎 Get Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    // Add id field for frontend compatibility
    const productWithId = {
      ...product.toObject(),
      id: product._id.toString(),
    };
    res.status(200).json({ success: true, data: productWithId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🔵 Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    // Add id field for frontend compatibility
    const productsWithId = products.map((product) => ({
      ...product.toObject(),
      id: product._id.toString(),
    }));
    res.status(200).json({ success: true, data: productsWithId }); // 👈 Fixed format
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    // Add id field for frontend compatibility
    const productWithId = {
      ...updated.toObject(),
      id: updated._id.toString(),
    };
    res.json({ success: true, data: productWithId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    // Add id field for frontend compatibility
    const productsWithId = products.map((product) => ({
      ...product.toObject(),
      id: product._id.toString(),
    }));
    res.json({ success: true, data: productsWithId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const inStock = await Product.countDocuments({ inStock: true });
    const outOfStock = await Product.countDocuments({ inStock: false });

    res.json({
      success: true,
      data: {
        totalProducts,
        inStockProducts: inStock,
        outOfStockProducts: outOfStock,
        totalRevenue: 0, // TODO: Calculate from product prices when orders are implemented
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
