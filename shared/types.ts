export interface Product {
  _id?: string; // MongoDB ObjectId
  id: string; // Fallback for frontend compatibility
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
}

export interface DashboardStats {
  totalProducts: number;
  inStockProducts: number;
  outOfStockProducts: number;
  totalRevenue: number;
}
